'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="group cursor-pointer"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg shadow-xl bg-white h-full group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/95 to-transparent px-5 py-4 flex flex-col justify-end gap-2">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-emerald-100 font-semibold backdrop-blur-md">
              Featured design
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">{product.name}</h3>
            <p className="text-sm text-gray-200">{product.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}