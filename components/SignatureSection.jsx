'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const designs = [
  {
    id: "1",
    title: "Bridal Elegance",
    desc: "Intricate embroidery for special occasions",
    image: "/b1.jpg",
  },
  {
    id: "2",
    title: "Minimal Chic",
    desc: "Clean and modern everyday styles",
    image: "/b2.jpg",
  },
  {
    id: "3",
    title: "Festive Glow",
    desc: "Vibrant designs for celebrations",
    image: "/b3.jpg",
  },
  {
    id: "4",
    title: "Classic Silk",
    desc: "Timeless traditional patterns",
    image: "/b4.jpg",
  },
  {
    id: "5",
    title: "Summer Breeze",
    desc: "Light and breezy for warm weather",
    image: "/b5.jpg",
  },
];

export default function SignatureSection() {
  return (
    <section className="pt-10 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Our Signature Styles
        </motion.h2>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">

          {designs.map((item, index) => (
            <Link key={item.id} href={`/product/${item.id}`} className="block">

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="min-w-[280px] md:min-w-[350px] h-[420px] relative rounded-3xl overflow-hidden group cursor-pointer"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <h3 className="text-xl font-semibold drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 drop-shadow-md">
                    {item.desc}
                  </p>
                </div>

              </motion.div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}