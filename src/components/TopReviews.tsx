import React from 'react';
import Slider from 'react-slick';
import { StarIcon } from '@heroicons/react/24/solid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const reviews = [
  {
    product: 'Sony WH-1000XM5',
    snippet: 'Best noise-cancelling headphones I’ve ever used. Battery life is phenomenal.',
    rating: 5,
    reviewer: 'Ankit R.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    productImage: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg',
  },
  {
    product: 'Apple MacBook M2',
    snippet: 'Performance is buttery smooth. Great for devs and creatives.',
    rating: 4,
    reviewer: 'Priya M.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    productImage: 'https://m.media-amazon.com/images/I/61L5QgPvgqL._SX679_.jpg',
  },
  {
    product: 'Nike Air Max 270',
    snippet: 'Super comfy and stylish. A perfect everyday sneaker!',
    rating: 4.5,
    reviewer: 'Rahul K.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    productImage: 'https://m.media-amazon.com/images/I/71wq7dvqwDL._SY500_.jpg',
  },
];

const TopReviews: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-xl text-center md:text-4xl font-bold text-purple-600 mb-1">
          🔥 Top Reviews This Week
        </h2>

        <Slider {...settings}>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="px-3"
            >
              <div className="bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 p-5 rounded-xl shadow-md hover:shadow-lg transition h-full">
                <img
                  src={review.productImage}
                  alt={review.product}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{review.product}</h3>
                <p className="text-gray-700 text-sm line-clamp-3">{review.snippet}</p>
                <div className="flex items-center mt-3">
                  {[...Array(Math.floor(review.rating))].map((_, j) => (
                    <StarIcon key={j} className="h-5 w-5 text-yellow-400" />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <StarIcon className="h-5 w-5 text-yellow-400 opacity-50" />
                  )}
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={review.avatar}
                    alt={review.reviewer}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-600">{review.reviewer}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-10 text-center">
          <button onClick={()=>navigate(`/reviews`)} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
            See All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopReviews;
