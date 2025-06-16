import React from 'react';
import { 
  SparklesIcon,
  ArrowRightIcon,
  MusicalNoteIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CameraIcon,
  HomeIcon,
  BookOpenIcon,
  HeartIcon,
  TrophyIcon,
  GiftIcon,
  WrenchIcon
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const AllCategories = () => {
  // Categories data with icons and counts
  const categories = [
    { 
      name: 'Audio & Headphones', 
      icon: <MusicalNoteIcon className="h-8 w-8 text-purple-500" />,
      count: 1284,
      color: 'from-purple-100 to-purple-50'
    },
    { 
      name: 'Smartphones', 
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-pink-500" />,
      count: 982,
      color: 'from-pink-100 to-pink-50'
    },
    { 
      name: 'Laptops & Computers', 
      icon: <ComputerDesktopIcon className="h-8 w-8 text-indigo-500" />,
      count: 756,
      color: 'from-indigo-100 to-indigo-50'
    },
    { 
      name: 'Cameras', 
      icon: <CameraIcon className="h-8 w-8 text-blue-500" />,
      count: 542,
      color: 'from-blue-100 to-blue-50'
    },
    { 
      name: 'Home Appliances', 
      icon: <HomeIcon className="h-8 w-8 text-yellow-500" />,
      count: 876,
      color: 'from-yellow-100 to-yellow-50'
    },
    { 
      name: 'Books & Media', 
      icon: <BookOpenIcon className="h-8 w-8 text-green-500" />,
      count: 432,
      color: 'from-green-100 to-green-50'
    },
    { 
      name: 'Health & Fitness', 
      icon: <HeartIcon className="h-8 w-8 text-red-500" />,
      count: 321,
      color: 'from-red-100 to-red-50'
    },
    { 
      name: 'Sports Equipment', 
      icon: <TrophyIcon className="h-8 w-8 text-orange-500" />,
      count: 287,
      color: 'from-orange-100 to-orange-50'
    },
    { 
      name: 'Gaming', 
      icon: <SparklesIcon className="h-8 w-8 text-purple-400" />,
      count: 654,
      color: 'from-purple-50 to-indigo-50'
    },
    { 
      name: 'Fashion', 
      icon: <GiftIcon className="h-8 w-8 text-pink-400" />,
      count: 789,
      color: 'from-pink-50 to-rose-50'
    },
    { 
      name: 'Tools & DIY', 
      icon: <WrenchIcon className="h-8 w-8 text-gray-500" />,
      count: 213,
      color: 'from-gray-100 to-gray-50'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="h-8 w-8 text-yellow-300" />
            <h1 className="text-4xl font-bold tracking-tight">Explore Categories</h1>
          </div>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Discover authentic reviews across {categories.length} carefully curated categories
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${category.color} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-white shadow-sm">
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium bg-white/80 px-2 py-1 rounded-full">
                    {category.count.toLocaleString()} reviews
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{category.name}</h3>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    View all reviews
                  </span>
                  <ArrowRightIcon className="h-5 w-5 text-purple-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
            <SparklesIcon className="h-6 w-6 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Featured Categories
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.slice(0, 2).map((category) => (
              <motion.div
                key={`featured-${category.name}`}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${category.color} rounded-2xl shadow-lg overflow-hidden`}
              >
                <div className="p-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    {React.cloneElement(category.icon, { className: 'h-12 w-12' })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    <p className="mt-2 text-gray-600">
                      Explore {category.count.toLocaleString()} authentic reviews
                    </p>
                    <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none">
                      Browse {category.name}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;