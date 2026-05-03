'use client';

import { motion } from 'framer-motion';

export default function FilterSidebar({ selectedCategory, onCategoryChange }) {
  const categories = ['All', 'Casual', 'Formal', 'Evening', 'Summer'];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-64 bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-lg font-bold mb-4">Filter by Category</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`block w-full text-left px-4 py-2 rounded ${
              selectedCategory === category
                ? 'bg-black text-white'
                : 'hover:bg-gray-100'
            } transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>
    </motion.div>
  );
}