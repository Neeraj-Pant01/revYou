import React, { useState, useEffect } from 'react';
import {FiChevronDown } from 'react-icons/fi';
import ReviewCard from '../components/reviews/Review';
import Pagination from '../components/Pagination';

const SearchResultsPage:React.FC = () => {
  const [searchQuery, _setSearchQuery] = useState('Headphones');
  const [resultsCount, _setResultsCount] = useState(128);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most Relevant');
  const [loading, setLoading] = useState(true);
  
  // Simulate loading data
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const sortOptions = [
    'Most Relevant',
    'Highest Rated',
    'Most Recent',
    'Most Helpful',
    'Price: Low to High',
    'Price: High to Low'
  ];

  const categories = [
    { name: 'Electronics', count: 42 },
    { name: 'Audio', count: 28 },
    { name: 'Headphones', count: 18 },
    { name: 'Wireless', count: 15 },
    { name: 'Gaming', count: 9 },
  ];

  return (
    <div className='bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen'>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Related Categories</h3>
              <div className="space-y-3">
                {categories.map((category, i) => (
                  <button 
                    key={i}
                    className="flex justify-between items-center w-full text-left p-2 hover:bg-purple-50 rounded-lg transition-colors"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="flex-1">
            {/* Results Summary */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-purple-600">1-12</span> of{' '}
                <span className="font-semibold text-purple-600">{resultsCount}</span> results for{' '}
                <span className="font-semibold text-pink-500">"{searchQuery}"</span>
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <div className="relative">
                  <button
                    className="flex items-center gap-1 text-purple-600 font-medium px-3 py-1 rounded-lg hover:bg-purple-50"
                    onClick={() => setSortOpen(!sortOpen)}
                  >
                    <span>{selectedSort}</span>
                    <FiChevronDown className={`h-4 w-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {sortOpen && (
                    <div className="absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-xl z-10 overflow-hidden border border-gray-100">
                      {sortOptions.map((option, i) => (
                        <button
                          key={i}
                          className={`w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors ${
                            selectedSort === option ? 'text-purple-600 font-medium' : 'text-gray-700'
                          }`}
                          onClick={() => {
                            setSelectedSort(option);
                            setSortOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Results Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="animate-pulse">
                      <div className="bg-gray-200 h-48 rounded-t-2xl" />
                      <div className="p-5 space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-4/5" />
                        <div className="h-10 bg-gray-200 rounded-lg w-full mt-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <ReviewCard key={i} />
                  ))}
                </div>
                
                <div className="flex justify-center mt-10">
                  <Pagination
                    currentPage={2}
                    totalPages={11}
                    onPageChange={(page) => console.log("Go to page:", page)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;