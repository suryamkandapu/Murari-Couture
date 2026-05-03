'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { products } from '../../../lib/data';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
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
            {/* Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto">
              {[product.image, product.image, product.image, product.image].map((img, index) => (
                <div key={index} className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-gray-600 font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Custom Order</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => {
                      const selected = selectedSize === size;
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border rounded-lg transition-colors ${selected ? 'bg-black text-white border-black' : 'border-gray-300 bg-white text-gray-700 hover:border-black hover:bg-black hover:text-white'}`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => {
                      const selected = selectedColor === color;
                      return (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 border rounded-lg transition-colors ${selected ? 'bg-black text-white border-black' : 'border-gray-300 bg-white text-gray-700 hover:border-black hover:bg-black hover:text-white'}`}
                        >
                          {color}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href={`https://wa.me/9550981547?text=${encodeURIComponent(`Hi Project G, I am interested in the ${product.name} in size ${selectedSize} and color ${selectedColor}. Please share the details.`)}`}
                className="w-full bg-green-500 text-white px-8 py-4 rounded-2xl hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <span>💬</span>
                <span>Share via WhatsApp</span>
              </a>

              <a
                href={`tel:+16303134161`}
                className="w-full border border-black text-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition-colors flex items-center justify-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <span>📞</span>
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="font-medium">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Care:</span>
                  <span className="font-medium">{product.care}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium capitalize">{product.category}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Details</h3>
              <p className="text-gray-700 leading-relaxed">{product.details}</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sample Reviews */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center space-x-1 mb-3">
                {renderStars(5)}
              </div>
              <p className="text-gray-700 mb-3">&ldquo;Absolutely love this blouse! The quality is outstanding and it fits perfectly. Highly recommend!&rdquo;</p>
              <p className="text-sm text-gray-500">- Sarah M., Verified Purchase</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center space-x-1 mb-3">
                {renderStars(5)}
              </div>
              <p className="text-gray-700 mb-3">&ldquo;Beautiful craftsmanship and attention to detail. The fabric is luxurious and comfortable.&rdquo;</p>
              <p className="text-sm text-gray-500">- Emily R., Verified Purchase</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}