'use client';

import { generateWhatsAppLink } from '../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* BRAND */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Murari Couture
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-snug">
              Premium custom blouse designs crafted with elegance.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4 text-base sm:text-lg">
              Explore
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/categories" className="hover:text-white">Categories</a></li>
              <li><a href="/best-works" className="hover:text-white">Best Works</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4 text-base sm:text-lg">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="tel:+916303134161" className="flex items-center gap-2 hover:text-white">
                  📞 6303-134-161
                </a>
              </li>
              <li>
                <a href="mailto:info@muraricouture.com" className="flex items-center gap-2 hover:text-white">
                  ✉️ info@muraricouture.com
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4 text-base sm:text-lg">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">

              <a
                href={generateWhatsAppLink(
                  { name: 'Murari Couture Inquiry' },
                  '',
                  '',
                  typeof window !== 'undefined' ? window.location.href : ''
                )}
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://instagram.com/murari.couture"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400"
              >
                📷 Instagram
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-3 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Murari Couture
      </div>

    </footer>
  );
}