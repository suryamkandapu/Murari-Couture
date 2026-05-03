'use client';

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import FilterSidebar from '../../../components/FilterSidebar';
import { products } from '../../../lib/data';

export default function CategoryPage() {
  const { slug } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(slug || 'All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory.toLowerCase());

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 capitalize">{slug} Collection</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Link key={product.id} href={`/product/${product.id}`} className="animate-fade-in block" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-white group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="text-sm">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}