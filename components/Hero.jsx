'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Project G
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          Premium custom blouse designs crafted for the modern woman
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="/gallery"
            className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Explore Designs
          </a>
        </motion.div>
      </div>
    </section>
  );
}