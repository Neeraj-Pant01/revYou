import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
} from 'react-icons/fa';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b overflow-hidden mt-5 md:mt-10 from-white to-gray-50 border-t border-gray-200">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <SparklesIcon className="h-6 w-6 text-purple-500 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                RevYOU
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              The ultimate platform for authentic product reviews and recommendations.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Trending Reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Write a Review</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for the latest reviews and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow w-[70%] md:w-auto px-4 py-2 text-sm border bg-white border-gray-300 rounded-l-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:brightness-105 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} RevYOU. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;