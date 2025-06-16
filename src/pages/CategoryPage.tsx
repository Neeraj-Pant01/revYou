import React, { useState } from 'react';
import { 
  SparklesIcon, 
  FunnelIcon, 
  Squares2X2Icon,
  ListBulletIcon,
  ChevronDownIcon,
  StarIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import FilterSidebar from '../components/FilterSidebar';
import ReviewCard from '../components/reviews/Review';

const CategoryPage:React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most Popular');

  // Mock data
  const category = {
    name: 'Headphones',
    description: 'Explore authentic reviews for the best headphones on the market',
    totalReviews: 1284,
    subcategories: [
      { name: 'Wireless', count: 642 },
      { name: 'Noise Cancelling', count: 428 },
      { name: 'Over-Ear', count: 315 },
      { name: 'In-Ear', count: 287 },
      { name: 'Gaming', count: 198 }
    ],
    topBrands: [
      { name: 'Sony', rating: 4.8 },
      { name: 'Bose', rating: 4.7 },
      { name: 'Apple', rating: 4.5 },
      { name: 'Sennheiser', rating: 4.4 },
      { name: 'JBL', rating: 4.3 }
    ]
  };

  const sortOptions = [
    'Most Popular',
    'Highest Rated',
    'Most Recent',
    'Price: Low to High',
    'Price: High to Low'
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <SparklesIcon className="h-6 w-6 text-yellow-300" />
            <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
              {category.totalReviews.toLocaleString()} reviews
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Mobile Filter Dialog */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl z-50"
            >
              <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 flex items-center justify-center"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              <FilterSidebar />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="mx-auto py-8">
        {/* Category Header */}
        <div className="flex md:px-4 px-1 flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {category.name}
              </span>
              <span className="text-sm font-normal text-gray-500">
                ({category.totalReviews.toLocaleString()} reviews)
              </span>
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {category.subcategories.map((subcat, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-purple-600 hover:bg-purple-50 border border-purple-100 shadow-sm"
                >
                  {subcat.name}
                  <span className="ml-1 text-purple-400">({subcat.count})</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 bg-white px-3 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-200"
                onClick={() => setSortOpen(!sortOpen)}
              >
                <span>Sort: {selectedSort}</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <button
                          key={option}
                          className={`block px-4 py-2 text-sm w-full text-left ${selectedSort === option ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'}`}
                          onClick={() => {
                            setSelectedSort(option);
                            setSortOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="w-5 h-5" />
            </button>

            <div className="hidden lg:flex items-center gap-1 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
              <button
                type="button"
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-500'}`}
                onClick={() => setViewMode('grid')}
              >
                <span className="sr-only">Grid view</span>
                <Squares2X2Icon className="w-5 h-5" />
              </button>
              <button
                type="button"
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-500'}`}
                onClick={() => setViewMode('list')}
              >
                <span className="sr-only">List view</span>
                <ListBulletIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0 pr-8">
            <div className="space-y-6">
              <FilterSidebar />
              
              {/* Top Brands */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-3">Top Brands</h3>
                <div className="space-y-3">
                  {category.topBrands.map((brand, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center justify-between group"
                    >
                      <span className="text-gray-700 group-hover:text-purple-600">
                        {brand.name}
                      </span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 mr-1">
                          {brand.rating}
                        </span>
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Review Grid */}
          <div className="flex-1 md:px-4 px-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ReviewCard />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ReviewCard variant="list" />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6 mt-8">
              <button
                disabled
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </button>
              <div className="hidden md:flex">
                {[1, 2, 3, 4, 5].map((num) => (
                  <a
                    key={num}
                    href="#"
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${num === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {num}
                  </a>
                ))}
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  10
                </a>
              </div>
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;