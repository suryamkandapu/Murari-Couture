'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { products } from '../../../lib/data';
import { generateWhatsAppLink } from '../../../lib/whatsapp';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const [selectedImage, setSelectedImage] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [productUrl, setProductUrl] = useState('');

  // Dynamic images (TEMP logic for testing)
  const productImages = product
    ? [
        product.image,
        '/b2.jpg',
        '/b3.jpg',
        '/b4.jpg',
        '/b5.jpg',
      ]
    : [];

  useEffect(() => {
    if (productImages.length > 0) {
      setSelectedImage(productImages[0]);
    }
  }, [product]);

  // Safe URL
  useEffect(() => {
    if (typeof window !== 'undefined' && product?.id) {
      setProductUrl(`${window.location.origin}/product/${product.id}`);
    }
  }, [product]);

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  const whatsappLink = generateWhatsAppLink(
    product,
    '',
    '',
    productUrl
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    return stars;
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: IMAGES */}
          <div className="space-y-4">

            {/* MAIN IMAGE */}
            <motion.div
              onClick={() => setIsZoomed(true)}
              className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-2 cursor-zoom-in"
            >
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
            </motion.div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 ${
                    selectedImage === img ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: DETAILS */}
          <div className="space-y-6">

            <div>
              <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
                Custom Design
              </span>

              <h1 className="text-4xl font-bold mt-3">{product.name}</h1>

              <div className="flex items-center gap-2 mt-2">
                {renderStars(product.rating)}
                <span className="text-gray-600">{product.rating}</span>
              </div>

              <p className="text-gray-600 mt-4">{product.description}</p>
            </div>

            {/* CUSTOM INFO BOX */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow">
              <h3 className="font-bold text-lg mb-3">
                Customization Details
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Blouse stitching & pattern</li>
                <li>• Embroidery customization</li>
                <li>• Neck & sleeve design</li>
                <li>• Perfect fitting adjustments</li>
              </ul>
            </div>

            {/* BUTTONS */}
            <div className="space-y-4">

              <a
                href={whatsappLink}
                target="_blank"
                className="w-full bg-green-500 text-white px-8 py-4 rounded-2xl flex justify-center items-center gap-2 font-semibold hover:bg-green-600 transition"
              >
                💬 Get This Design Custom Made
              </a>

              <a
                href="tel:+916303134161"
                className="w-full border border-black px-8 py-4 rounded-2xl flex justify-center items-center gap-2 hover:bg-black hover:text-white transition"
              >
                📞 Call Now
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* 🔥 FULL SCREEN IMAGE ZOOM */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full rounded-xl"
          />

          <button className="absolute top-6 right-6 text-white text-3xl">
            ✕
          </button>
        </div>
      )}
    </div>
  );
}