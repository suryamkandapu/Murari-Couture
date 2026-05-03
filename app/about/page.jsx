'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-16 pb-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16"
        >
          About Murari Couture
        </motion.h1>

        {/* SECTION 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/b5.jpg"
              alt="Our Story"
              className="w-full h-[280px] md:h-[420px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2023, Murari Couture began as a passion to craft
              unique, high-quality blouse designs that empower women to
              express their individuality.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From a small boutique, we’ve grown into a trusted name known for
              precision, craftsmanship, and timeless elegance.
            </p>
          </div>
        </motion.div>

        {/* SECTION 2 (reverse layout) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Text */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Philosophy
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Fashion should be personal, timeless, and meaningful. Every piece
              we create is tailored with attention to detail and premium quality.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We blend modern aesthetics with traditional craftsmanship so you
              always feel confident, elegant, and unique.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/b6.jpg"
              alt="Our Philosophy"
              className="w-full h-[280px] md:h-[420px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}