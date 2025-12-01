import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products = [] }){
  if (!products.length) return <div className="p-6 bg-white rounded-lg shadow text-center">No products found.</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
