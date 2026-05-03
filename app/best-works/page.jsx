'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { products } from '../../lib/data';

export default function BestWorks() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Best Works</h1>
        <p className="text-center text-lg mb-12">Our finest custom blouse designs</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer ${sizes[index % sizes.length]}`}
              >
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    <p className="text-sm text-gray-200">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}