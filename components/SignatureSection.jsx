'use client';

import { motion } from 'framer-motion';

const designs = [
  {
    title: "Bridal Elegance",
    desc: "Intricate embroidery for special occasions",
    image: "/b1.jpg",
  },
  {
    title: "Minimal Chic",
    desc: "Clean and modern everyday styles",
    image: "/b2.jpg",
  },
  {
    title: "Festive Glow",
    desc: "Vibrant designs for celebrations",
    image: "/b3.jpg",
  },
  {
    title: "Classic Silk",
    desc: "Timeless traditional patterns",
    image: "/b4.jpg",
  },
  {
    title: "Summer Breeze",
    desc: "Light and breezy for warm weather",
    image: "/b5.jpg",
  },
];

export default function SignatureSection() {
  return (
    <section className="pt-10 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          Our Signature Styles
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">

          {designs.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] md:min-w-[350px] h-[420px] relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}