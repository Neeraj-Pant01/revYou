import React from 'react';
import { categoryType } from '../../types/categor';
import { Link } from 'react-router-dom';

type CategoryProp = {
  c: categoryType;
};

const CategoryCard: React.FC<CategoryProp> = ({ c }) => {
  return (
    <div className="bg-white mb-4 md:mb-0 md:w-[23%] p-5 flex flex-col rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <h1 className="text-xl font-semibold text-purple-500 mb-1">{c?.name}</h1>
      <p className="text-sm text-gray-600 mb-3">{c?.desc}</p>

      <div className="flex flex-wrap gap-3 mb-4">
        {c?.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`product-img-${i}`}
            className="w-[47%] h-[100px] rounded-lg object-cover border border-gray-200"
          />
        ))}
      </div>

      <Link to={`/reviews/categories/list`} className="text-indigo-600 text-center font-medium hover:underline hover:text-indigo-700 transition">
        See all product reviews →
      </Link>
    </div>
  );
};

export default CategoryCard;

