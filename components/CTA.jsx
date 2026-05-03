'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { generateWhatsAppLink } from '../lib/whatsapp';

export default function CTA() {
  const pathname = usePathname();

  // 🎨 Dynamic styles based on page
  const styles = {
    '/': {
      bg: 'bg-gradient-to-br from-pink-50 via-white to-orange-50',
      button: 'bg-pink-500 hover:bg-pink-600 text-white',
    },
    
  };

  const current = styles[pathname] || styles['/'];

  return (
    <section className={`py-20 px-4 ${current.bg}`}>
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-5 text-gray-900"
        >
          Ready to Create Your Perfect Blouse?
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg mb-8 text-gray-600"
        >
          Contact us today to discuss your custom design requirements.
        </motion.p>

        {/* BUTTON */}
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href={generateWhatsAppLink()}
          className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium text-sm md:text-base 
          shadow-lg hover:shadow-xl transition-all duration-300 ${current.button}`}
        >
          💬 Enquire via WhatsApp
        </motion.a>

      </div>
    </section>
  );
}