import React from 'react';
import { StarIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const ReviewBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 md:py-16 px-6 md:px-20 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover What People <span className="text-yellow-300">Really Think</span>
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Honest reviews on thousands of products – from tech to fashion and everything in between.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button onClick={()=>navigate(`/reviews`)} className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
              Browse Reviews
            </button>
            <button onClick={()=>navigate(`/review/upload`)} className="bg-indigo-700 hover:bg-indigo-800 font-semibold py-2 px-6 rounded-full">
              Post a Review
            </button>
          </div>
        </div>

        {/* Icon / Visual Section */}
        <div className="flex justify-center items-center gap-6 flex-wrap text-white">
          <div className="flex flex-col items-center">
            <MagnifyingGlassIcon className="w-12 h-12 text-white/90" />
            <p className="mt-2 text-sm">Compare</p>
          </div>
          <div className="flex flex-col items-center">
            <ChatBubbleOvalLeftEllipsisIcon className="w-12 h-12 text-white/90" />
            <p className="mt-2 text-sm">Review</p>
          </div>
          <div className="flex flex-col items-center">
            <StarIcon className="w-12 h-12 text-white/90" />
            <p className="mt-2 text-sm">Decide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBanner;
