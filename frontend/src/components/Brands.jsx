import React from 'react';

export default function Brands({ brands = [] }){
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center">
        {brands.map(b => (
          <div key={b.id} className="p-3 bg-white rounded-lg border flex items-center justify-center">
            <img src={b.logo} alt={b.label} className="max-h-12 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
