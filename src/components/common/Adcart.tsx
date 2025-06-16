import React from 'react';

type AdCardProps = {
  image: string;
  url: string;
  platform: 'Amazon' | 'Flipkart' | string;
  ctaText?: string;
};

const platformColors: Record<string, string> = {
  Amazon: 'from-yellow-400 via-yellow-500 to-yellow-600',
  Flipkart: 'from-blue-400 via-blue-500 to-blue-600',
};

const AdCard: React.FC<AdCardProps> = ({ image, url, platform, ctaText = 'Buy Now' }) => {
  const gradient = platformColors[platform] || 'from-purple-500 via-pink-500 to-yellow-400';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full rounded-xl p-4 bg-gradient-to-r ${gradient} text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer`}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={`${platform} product`}
          className="rounded-lg w-36 h-36 object-cover mb-3 shadow-md border-2 border-white"
        />
        <h3 className="text-lg font-semibold mb-1">Buy on {platform}</h3>
        <p className="text-sm opacity-90 mb-3">Get the best deal now on {platform}</p>
        <button className="bg-white text-black px-4 py-1 rounded-full font-medium hover:bg-opacity-90 transition">
          {ctaText}
        </button>
      </div>
    </a>
  );
};

export default AdCard;
