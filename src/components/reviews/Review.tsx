import React, { useState } from 'react';
import { StarIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const ReviewCard = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Save Button */}
      <div className="relative rounded-t-xl overflow-hidden md:h-48 h-32 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <img
          className="object-contain h-full transition-transform duration-500 group-hover:scale-105"
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpds_4n9K52keUfORT2dc17rzFaxhG-uHvvBP__TcPYiUQRvYslgrvT4w35qRFWm9JPjxnlARVoNZHapzQuoftwzl7thEYEkg3-qynuaSXrzAS-hiOjf9-lA"
          alt="Apple AirPods Max"
        />
        
        {/* Save Button */}
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all ${isSaved ? 'bg-pink-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-pink-500 hover:text-white'}`}
        >
          {isSaved ? (
            <SparklesIcon className="h-5 w-5" />
          ) : (
            <HeartIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="md:p-5 p-2 space-y-3">
        {/* Product Title */}
        <h3 className="text-sm md:text-base font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Apple AirPods Max
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon 
              key={star}
              className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">(89)</span>
        </div>

        {/* Review Snippet */}
        <div className="relative">
          <p className="text-gray-600 text-xs md:text-sm text-center italic">
            "Amazing sound quality and comfort. Worth the price!"
          </p>
          {/* Gradient fade effect */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Action Button */}
        <button onClick={()=>navigate(`/review/123`)} className="w-full mt-4 py-2.5 md:px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-105 flex items-center text-xs md:text-sm justify-center gap-2">
          <span>Read All Reviews</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        {/* Floating Price Tag (appears on hover) */}
        {isHovered && (
          <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
            $549
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;