// import React, { useState } from 'react';

// type ReviewCardProps = {
//   user: {
//     name: string;
//     avatar: string;
//   };
//   title: string;
//   description: string;
//   stars: number;
//   images: string[];
//   createdAt: string;
// };

// const SingleREvCard: React.FC<ReviewCardProps> = ({ user, title, description, stars, images, createdAt }) => {
//   const [mainImage, setMainImage] = useState(images[0]);

//   return (
//     <div className="bg-white rounded-xl m-3 shadow-lg p-6 mx-auto mt-8">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Images Section */}
//         <div className="w-fulls md:w-1/2">
//           {/* Main Image */}
//           <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
//             <img src={mainImage} alt="Main" className="w-full h-full object-cover" />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-2 mt-4">
//             {images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`thumb-${i}`}
//                 className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${img === mainImage ? 'border-blue-500' : 'border-transparent'
//                   }`}
//                 onClick={() => setMainImage(img)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Details Section */}
//         <div className="w-full md:w-1/2 flex flex-col justify-between">
//           {/* Title */}
//           <div className="relative z-10 bg-white rounded-[0.75rem]">
//             <span className="text-transparent text-2xl font-semibold bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-yellow-500">
//               {title}
//             </span>
//           </div>

//           {/* Stars */}
//           <div className="flex flex-col mb-3">
//             <div className="flex gap-1 items-center">
//               {Array(5)
//                 .fill(0)
//                 .map((_, i) => (
//                   <span key={i} className={`text-yellow-400 text-xl ${i < stars ? '' : 'opacity-30'}`}>★</span>
//                 ))}
//             </div>
//             <div className="items-center justify-center font-semibold text-gray-400">
//               4/5
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-gray-700 mb-6">{description}</p>

//           {/* User Info */}
//           <div className="flex items-center mt-auto">
//             <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
//             <div className="ml-3">
//               <p className="font-semibold text-gray-500">{user.name}</p>
//               <p className="text-sm text-gray-500">{new Date(createdAt).toLocaleDateString()}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleREvCard;





import React, { useState } from 'react';
import { StarIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { SparklesIcon, HeartIcon, ChatBubbleBottomCenterTextIcon, BookmarkIcon, ShareIcon } from '@heroicons/react/24/outline';

type ReviewCardProps = {
  user: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  title: string;
  description: string;
  stars: number;
  images: string[];
  createdAt: string;
  likes?: number;
  comments?: number;
};

const SingleRevCard: React.FC<ReviewCardProps> = ({ 
  user, 
  title, 
  description, 
  stars, 
  images, 
  createdAt,
  likes = 0,
  comments = 0
}) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Images Section */}
      <div className="relative">
        {/* Main Image */}
        <div className="w-full aspect-video md:h-[40vw] bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden">
          <img 
            src={mainImage} 
            alt="Main" 
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>
        
        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="flex gap-2 md:gap-4 justify-center">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`w-10 h-10 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${img === mainImage ? 'border-yellow-400 scale-110' : 'border-white'}`}
                >
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
              { (
                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <p className="font-semibold text-gray-800">{user.name}</p>
                { (
                  <span className="ml-1 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">Verified</span>
                )}
              </div>
              <p className="text-xs text-gray-500">{new Date(createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`h-5 w-5 ${star <= stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-500">{stars.toFixed(1)}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">#Quality</span>
          <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs rounded-full">#Value</span>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">#Recommended</span>
        </div>

        <div>
          buy links/affiliate links
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex gap-4">
            <button 
              onClick={() => setIsLiked(!isLiked)} 
              className="flex items-center text-gray-500 hover:text-pink-500 transition-colors"
            >
              <HeartIcon className={`h-5 w-5 ${isLiked ? 'fill-pink-500 text-pink-500' : ''}`} />
              <span className="ml-1 text-sm">{likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-purple-500 transition-colors">
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
              <span className="ml-1 text-sm">{comments}</span>
            </button>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsSaved(!isSaved)} 
              className={`text-gray-500 ${isSaved ? 'text-yellow-500' : 'hover:text-gray-700'}`}
            >
              <BookmarkIcon className={`h-5 w-5 ${isSaved ? 'fill-yellow-400' : ''}`} />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <ShareIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRevCard;
