import React from 'react';

export default function IconButtons() {
  return (
    <div className="flex items-center gap-6 text-white">
      
      {/* Favorites */}
      <button className="flex items-center gap-1 hover:opacity-80">
        <svg className="h-5 w-5" fill="none" stroke="currentColor"
          strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 
            0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
        </svg>
        <span className="text-sm">Favorites</span>
      </button>

      {/* Cart */}
      <button className="relative flex items-center gap-1 hover:opacity-80">
        <svg className="h-5 w-5" fill="none" stroke="currentColor"
          strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8l-1.5 7h13.3L17 13m-7 8a1 1 
            0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"/>
        </svg>
        <span className="text-sm">Cart</span>

        {/* badge */}
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
      </button>

      {/* Sign In */}
      <button className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
        Sign In
      </button>

    </div>
  );
}
