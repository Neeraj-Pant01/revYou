// src/components/slides/Slide.tsx
import React from "react";
import { slideTypes } from "../../../types/slider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type SlideProps = {
  slide: slideTypes;
};

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="relative h-[50vh] md:h-[65vh] overflow-hidden rounded-md">
      {/* Background image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full px-6 md:px-20 py-10 flex flex-col justify-center text-white">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold max-w-3xl"
        >
          {slide.title}
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 md:text-xl text-gray-100 max-w-xl"
        >
          {slide.desc}
        </motion.p>

        {/* CTA Button */}
        {slide.ctaText && slide.ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <Link
              to={slide.ctaLink}
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
            >
              {slide.ctaText}
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Slide;
