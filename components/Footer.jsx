export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Project G</h3>
            <p className="text-gray-400">
              Premium custom blouse designs for the modern woman.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/categories" className="hover:text-white">Categories</a></li>
              <li><a href="/best-works" className="hover:text-white">Best Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+16303134161" className="hover:text-white flex items-center">
                  <span className="mr-2">📞</span> +1 (630) 313-4161
                </a>
              </li>
              <li>
                <a href="mailto:info@projectg.com" className="hover:text-white flex items-center">
                  <span className="mr-2">✉️</span> info@projectg.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/9550981547?text=Hi%20Project%20G"
                className="text-gray-400 hover:text-green-400 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg">💬</span>
                <span className="ml-1">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/projectg"
                className="text-gray-400 hover:text-pink-400 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg">📷</span>
                <span className="ml-1">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Project G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}