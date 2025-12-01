import React from 'react';

function Stars({ n }){
  const full = Math.round(n || 4);
  return <div className="text-yellow-400">{'★'.repeat(full)}{'☆'.repeat(5-full)}</div>;
}

export default function ProductCard({ product }){
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="h-48 flex items-center justify-center bg-white rounded">
        <img src={product.image} alt={product.title} className="max-h-full object-contain" />
      </div>

      <div className="mt-3 flex-1">
        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-1">₹{product.price}</p>
        <div className="mt-2"><Stars n={product.rating} /></div>
      </div>

      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded-md">+ Add</button>
      </div>
    </div>
  );
}
