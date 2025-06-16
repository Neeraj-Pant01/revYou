import React from 'react';
import { UserGroupIcon, PencilSquareIcon, TrophyIcon } from '@heroicons/react/24/outline';

const CommunityBanner: React.FC = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl shadow-md py-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Illustration/Icons Section */}
        <div className="flex justify-center items-center gap-6 flex-wrap text-indigo-600">
          <div className="flex flex-col items-center">
            <UserGroupIcon className="w-12 h-12" />
            <p className="mt-2 text-sm font-medium">Join Community</p>
          </div>
          <div className="flex flex-col items-center">
            <PencilSquareIcon className="w-12 h-12" />
            <p className="mt-2 text-sm font-medium">Write Reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <TrophyIcon className="w-12 h-12" />
            <p className="mt-2 text-sm font-medium">Earn Credibility</p>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
            Be a Voice That Matters
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Share your experiences, help others choose better, and rise as a trusted reviewer in our growing community.
          </p>
          <div className="mt-6">
            <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-indigo-700 transition">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBanner;
