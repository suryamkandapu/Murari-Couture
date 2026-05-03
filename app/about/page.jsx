'use client';

'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Project G
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, Project G started as a passion project to create unique, high-quality blouse designs that empower women to express their personal style.
              </p>
              <p className="text-gray-600">
                What began as a small boutique has grown into a trusted name in custom fashion, known for our attention to detail and commitment to craftsmanship.
              </p>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg">
              <img src="/b5.jpg" alt="About image" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-64 bg-gray-200 rounded-lg">
              <img src="/b6.jpg" alt="About image" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
              <p className="text-gray-600 mb-4">
                We believe that fashion should be personal, timeless, and made to last. Each piece is carefully crafted with premium materials and attention to every detail.
              </p>
              <p className="text-gray-600">
                Our designs blend modern aesthetics with classic elegance, ensuring our clients look and feel their best in any occasion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}