import React, { useState } from 'react';
import { 
  StarIcon, 
  BookmarkIcon, 
  HeartIcon, 
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/solid';

const ProfilePage:React.FC = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock data
  const user = {
    name: "Alex Johnson",
    username: "@alexjohn",
    bio: "Tech enthusiast & audiophile. Love reviewing gadgets!",
    followers: 1243,
    following: 562,
    reviews: 89,
    saved: 24,
    verified: true,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  };

  const recentReviews = [
    {
      id: 1,
      product: "Apple AirPods Max",
      rating: 4,
      comment: "Amazing sound quality, but heavy on the head.",
      date: "2 days ago",
      likes: 45
    },
    {
      id: 2,
      product: "Sony WH-1000XM5",
      rating: 5,
      comment: "Best noise cancellation ever!",
      date: "1 week ago",
      likes: 102
    },
    {
      id: 3,
      product: "Bose QuietComfort 45",
      rating: 3,
      comment: "Good but not worth the price.",
      date: "2 weeks ago",
      likes: 23
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 pb-10">
      {/* Cover Photo */}
      <div className="relative h-48 w-full bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden">
        <img 
          src={user.cover} 
          alt="Cover" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Profile Header */}
      <div className="max-w-4xl md:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Avatar */}
            <div className="relative -mt-20 md:-mt-24">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-lg"
              />
              {user.verified && (
                <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                    {user.name}
                    {user.verified && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Verified</span>
                    )}
                  </h1>
                  <p className="text-gray-600">{user.username}</p>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <EllipsisHorizontalIcon className="h-6 w-6" />
                </button>
              </div>

              <p className="mt-2 text-gray-700">{user.bio}</p>

              {/* Stats */}
              <div className="flex gap-6 mt-4 text-sm">
                <div className='flex flex-col md:flex-row'>
                  <span className="font-bold text-gray-900">{user.followers}</span>
                  <span className="text-gray-600 md:ml-1">Followers</span>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <span className="font-bold text-gray-900">{user.following}</span>
                  <span className="text-gray-600 md:ml-1">Following</span>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <span className="font-bold text-gray-900">{user.reviews}</span>
                  <span className="text-gray-600 md:ml-1">Reviews</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${isFollowing ? 'bg-gray-100 text-gray-700' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg'}`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                  <ChatBubbleLeftIcon className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl md:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${activeTab === 'reviews' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <StarIcon className="h-4 w-4" />
            Reviews
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${activeTab === 'saved' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <BookmarkIcon className="h-4 w-4" />
            Saved
          </button>
          <button
            onClick={() => setActiveTab('liked')}
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${activeTab === 'liked' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <HeartIcon className="h-4 w-4" />
            Liked
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <h3 className="font-bold text-purple-600">{review.product}</h3>
                  <div className="flex items-center gap-1">
                    {Array(5).fill(0).map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
                <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                  <span>{review.date}</span>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1 hover:text-pink-500">
                      <HeartIcon className="h-4 w-4" />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-purple-500">
                      <ChatBubbleLeftIcon className="h-4 w-4" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="text-center py-10">
            <BookmarkIcon className="h-10 w-10 mx-auto text-gray-400" />
            <p className="mt-3 text-gray-500">No saved items yet</p>
          </div>
        )}

        {activeTab === 'liked' && (
          <div className="text-center py-10">
            <HeartIcon className="h-10 w-10 mx-auto text-gray-400" />
            <p className="mt-3 text-gray-500">No liked reviews yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;