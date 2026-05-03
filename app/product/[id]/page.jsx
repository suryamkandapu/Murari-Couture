'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { products } from '../../../lib/data';
import { generateWhatsAppLink } from '../../../lib/whatsapp';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [productUrl, setProductUrl] = useState('');

  // ✅ Safe way to get current URL (avoids SSR issues)
 useEffect(() => {
  if (typeof window !== 'undefined' && product?.id) {
    const url = `${window.location.origin}/product/${product.id}`;
    setProductUrl(url);
  }
}, [product]);

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  const whatsappLink = generateWhatsAppLink(
    product,
    selectedSize,
    selectedColor,
    productUrl
  );

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }
    return stars;
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
            </div>

            <div className="flex space-x-3 overflow-x-auto">
              {[product.image, product.image, product.image].map((img, index) => (
                <div key={index} className="w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold">{product.name}</h1>

            <div className="flex items-center gap-2">
              {renderStars(product.rating)}
              <span>{product.rating}</span>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Size */}
            <div>
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size ? 'bg-black text-white' : ''
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedColor === color ? 'bg-black text-white' : ''
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl flex justify-center items-center gap-2 font-semibold hover:scale-105 transition"
              >
                💬 Enquire on WhatsApp
              </a>

              {/* Call */}
              <a
                href="tel:+916303134161"
                className="w-full border border-black px-8 py-4 rounded-2xl flex justify-center items-center gap-2 hover:bg-black hover:text-white transition"
              >
                📞 Call Now
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}