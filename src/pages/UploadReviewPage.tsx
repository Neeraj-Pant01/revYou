import React, { useState, useRef, useEffect } from 'react';
import { PhotoIcon, StarIcon, XMarkIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

const UploadReviewPage = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e:any) => {
    const files = Array.from(e.target.files) as File[];
    const newImages = [...images, ...files];
    setImages(newImages);
    
    // Create preview URLs
    const newPreviewUrls = files.map((file :any)=> URL.createObjectURL(file));
    setPreviewImages(prev => [...prev, ...newPreviewUrls]);
  };

  const removeImage = (index:any) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    
    const newPreviews = [...previewImages];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);
  };

  const handleDragOver = (e:any) => {
    e.preventDefault();
  };

  const handleDrop = (e:any) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleImageUpload({ target: { files } });
    }
  };

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white px-6 py-2 rounded-full shadow-lg mb-4">
            <SparklesIcon className="h-5 w-5 mr-2" />
            <h1 className="text-xl font-bold">Share Your Experience</h1>
          </div>
          <p className="text-gray-600 max-w-lg mx-auto">
            Help others by sharing your honest review. Your feedback matters!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Image Upload Section */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Upload Photos</h2>
            <div 
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${previewImages.length > 0 ? 'border-gray-200' : 'border-purple-300 bg-purple-50'}`}
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden" 
                multiple 
                accept="image/*"
              />
              {previewImages.length === 0 ? (
                <>
                  <CloudArrowUpIcon className="mx-auto h-12 w-12 text-purple-400" />
                  <p className="mt-3 text-sm text-gray-600">
                    <span className="font-medium text-purple-600">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
                </>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {previewImages.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={preview} 
                        alt={`Preview ${index}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(index);
                        }}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <XMarkIcon className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  ))}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center h-32">
                    <PhotoIcon className="h-8 w-8 text-gray-400" />
                    <span className="text-xs text-gray-500 mt-1">Add more</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Review Form Section */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Your Review</h2>
            
            {/* Title */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Review Title*
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-3 border bg-[white] border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
                placeholder="Summarize your experience in a few words"
                required
              />
            </div>

            {/* Rating */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Rating*
              </label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <StarIcon
                      className={`h-8 w-8 ${(hoverRating || rating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  </button>
                ))}
                <span className="ml-3 text-sm text-gray-500">
                  {rating > 0 ? `${rating} star${rating !== 1 ? 's' : ''}` : 'Rate this product'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Review*
              </label>
              <textarea
                id="description"
                rows={5}
                className="w-full px-4 py-3 border bg-[white] border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
                placeholder="Share your experience with this product. What did you like or dislike?"
                required
              />
            </div>

            {/* Additional Details */}
            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Additional Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Brand */}
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                    Brand
                  </label>
                  <input
                    type="text"
                    id="brand"
                    className="w-full px-4 py-3 border bg-[white] border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
                    placeholder="Product brand name"
                  />
                </div>

                {/* Specifications */}
                <div>
                  <label htmlFor="specs" className="block text-sm font-medium text-gray-700 mb-2">
                    Specifications
                  </label>
                  <input
                    type="text"
                    id="specs"
                    className="w-full px-4 py-3 border bg-[white] border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
                    placeholder="Model, size, color, etc."
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity Purchased
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    className="w-full px-4 py-3 border bg-[white] border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
                    placeholder="1"
                  />
                </div>

                {/* Quality */}
                <div>
                  <label htmlFor="quality" className="block text-sm font-medium text-gray-700 mb-2">
                    Quality Rating
                  </label>
                  <select
                    id="quality"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select quality</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="average">Average</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-medium rounded-lg shadow-md hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadReviewPage;