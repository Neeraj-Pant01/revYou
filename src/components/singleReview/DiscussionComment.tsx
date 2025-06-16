import React, { useState } from "react";
import { StarIcon, HeartIcon, ChatBubbleLeftIcon, EllipsisHorizontalIcon, BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid, BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";

type CommentProps = {
  name: string;
  avatar: string;
  text: string;
  stars: number;
  createdAt: string;
  likes?: number;
  replies?: number;
  verified?: boolean;
};

const MAX_LENGTH = 250;

const DiscussionComment: React.FC<CommentProps> = ({
  name,
  avatar,
  text,
  stars,
  createdAt,
  likes = 0,
  replies = 0,
  verified = false
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const isLong = text.length > MAX_LENGTH;
  const visibleText = expanded ? text : text.slice(0, MAX_LENGTH);

  return (
    <div className="flex w-full gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Avatar */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="flex flex-col items-center"
        >
          {isLiked ? (
            <HeartIconSolid className="h-5 w-5 text-pink-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-400 hover:text-pink-500" />
          )}
          <span className={`text-xs mt-1 ${isLiked ? 'text-pink-500 font-medium' : 'text-gray-500'}`}>
            {likes + (isLiked ? 1 : 0)}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-gray-800">{name}</p>
            {verified && (
              <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">Verified</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {new Date(createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          {Array(5).fill(0).map((_, i) => (
            <StarIcon
              key={i}
              className={`h-4 w-4 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">{stars.toFixed(1)}</span>
        </div>

        {/* Comment Text */}
        <div className="relative">
          <p className="text-gray-700 whitespace-pre-wrap">
            {visibleText}
            {isLong && !expanded && "..."}
          </p>
          
          {/* Gradient fade effect for long comments */}
          {isLong && !expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent"></div>
          )}
        </div>

        {/* Toggle Link */}
        {isLong && (
          <button
            className="text-purple-600 text-sm mt-1 font-medium hover:underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-100">
          <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600">
            <ChatBubbleLeftIcon className="h-5 w-5" />
            <span className="text-sm">{replies} replies</span>
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className="text-gray-500 hover:text-yellow-500"
            >
              {isSaved ? (
                <BookmarkIconSolid className="h-5 w-5 text-yellow-500" />
              ) : (
                <BookmarkIcon className="h-5 w-5" />
              )}
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              <ShareIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionComment;