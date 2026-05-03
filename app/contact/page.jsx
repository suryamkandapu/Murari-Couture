'use client';

import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '../../lib/whatsapp';

export default function Contact() {
  return (
    <div className="pt-16 pb-12 px-4 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16"
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white text-xl shadow-md">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:+916303134161"
                    className="text-lg font-medium hover:text-black transition"
                  >
                    +91 6303 134 161
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white text-xl shadow-md">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:surya630313@gmail.com"
                    className="text-lg font-medium hover:text-black transition"
                  >
                    surya630313@gmail.com
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="pt-4">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg overflow-hidden shadow-lg"
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition"></span>

                  <span className="relative flex items-center gap-2">
                    💬 Chat on WhatsApp
                  </span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE MAP */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-200"
          >
            <div className="h-[280px] md:h-full">
              <iframe
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>

        {/* EXTRA SECTION (Luxury Touch) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Custom Designs, Just for You ✨
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your design ideas, inspirations, or requirements — and we’ll craft
            a blouse that perfectly matches your vision with precision and elegance.
          </p>
        </motion.div>

      </div>
    </div>
  );
}