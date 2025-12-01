import React from 'react';

export default function Categories({ categories = [], selected, onSelect }){
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition ${
            selected === cat.id ? 'border-blue-500 shadow bg-white' : 'border-gray-200 bg-white'
          }`}
        >
          <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
            <img src={cat.image} alt={cat.label} className="w-12 h-12 object-contain" />
          </div>
          <div className="text-sm text-gray-700">{cat.label}</div>
        </button>
      ))}
    </div>
  );
}
