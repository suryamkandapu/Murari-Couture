'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories } from '../lib/data';

export default function CategorySection() {
  return (
    <section className="pt-16 pb-10 px-3 md:px-4">
      <div className="max-w-7xl mx-auto">

        {/* MOBILE = masonry style | DESKTOP = same grid */}
        <div className="
          columns-2 gap-3
          md:grid md:grid-cols-3 lg:grid-cols-4 
          md:gap-5 lg:gap-6 
          md:auto-rows-[220px] lg:auto-rows-[250px]
        ">

          {categories.map((category, index) => {
            const sizes = [
              'md:row-span-1',
              'md:row-span-2',
              'md:col-span-2 md:row-span-1',
              'md:row-span-1',
            ];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className={`
                  mb-3 break-inside-avoid
                  md:mb-0
                  ${sizes[index % sizes.length]}
                `}
              >
                <Link href={`/categories/${category.id}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-md h-[180px] md:h-full group">

                    {/* IMAGE */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60" />

                    {/* CONTENT */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-sm md:text-xl font-semibold">
                        {category.name}
                      </h3>
                      <p className="text-[11px] md:text-sm text-white/80">
                        {category.description}
                      </p>
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}