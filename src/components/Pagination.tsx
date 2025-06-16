import React from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  EllipsisHorizontalIcon 
} from '@heroicons/react/24/outline';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page + ellipsis
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`px-3 py-1 rounded-lg ${1 === currentPage ? 
            'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' : 
            'text-gray-700 hover:bg-purple-50'}`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="left-ellipsis" className="px-1 text-gray-500">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </span>
        );
      }
    }

    // Middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded-lg ${i === currentPage ? 
            'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' : 
            'text-gray-700 hover:bg-purple-50'}`}
        >
          {i}
        </button>
      );
    }

    // Last page + ellipsis
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="right-ellipsis" className="px-1 text-gray-500">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-3 py-1 rounded-lg ${totalPages === currentPage ? 
            'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' : 
            'text-gray-700 hover:bg-purple-50'}`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg ${currentPage === 1 ? 
          'text-gray-400 cursor-not-allowed' : 
          'text-gray-700 hover:bg-purple-50'}`}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {renderPageNumbers()}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg ${currentPage === totalPages ? 
          'text-gray-400 cursor-not-allowed' : 
          'text-gray-700 hover:bg-purple-50'}`}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;