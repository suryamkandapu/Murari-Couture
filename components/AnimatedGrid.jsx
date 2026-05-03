'use client';

import { motion } from 'framer-motion';
import { products } from '../lib/data';
import ProductCard from './ProductCard';

export default function AnimatedGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6 auto-rows-[220px] md:auto-rows-[240px] lg:auto-rows-[280px]">
      {products.map((product, index) => {
        const sizes = [
          'col-span-1 md:row-span-2',
          'col-span-1 md:row-span-1',
          'col-span-1 md:col-span-2 md:row-span-1',
          'col-span-1 md:row-span-1',
          'col-span-1 md:row-span-2',
          'col-span-1 md:col-span-2 md:row-span-1',
          'col-span-1 md:row-span-1',
          'col-span-1 md:row-span-2',
          'col-span-1 md:row-span-1',
          'col-span-1 md:col-span-2 md:row-span-1',
        ];
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className={`${sizes[index % sizes.length]} overflow-hidden rounded-3xl`}
          >
            <ProductCard product={product} />
          </motion.div>
        );
      })}
    </div>
  );
}