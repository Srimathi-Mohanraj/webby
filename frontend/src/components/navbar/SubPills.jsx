import React from "react";

export default function SubPills() {
  return (
    <div className="w-full flex justify-center bg-[#eaf1ff]/30 py-3">
      <div className="flex gap-10 flex-wrap justify-center">
        
        {/* Websites */}
        <button className="px-6 py-2 bg-white shadow-sm rounded-full text-sm font-medium hover:bg-gray-50 transition border flex items-center gap-1">
          Websites
           <span className="text-xl">▾</span>
        </button>

        {/* Products */}
        <button className="px-6 py-2 bg-white shadow-sm rounded-full text-sm font-medium hover:bg-gray-50 transition border flex items-center gap-1">
          Products
          <span className="text-xl">▾</span>
        </button>

        {/* For Sellers */}
        <button className="px-6 py-2 bg-white shadow-sm rounded-full text-sm font-medium hover:bg-gray-50 transition border">
          For Sellers
        </button>

        {/* Insights */}
        <button className="px-6 py-2 bg-white shadow-sm rounded-full text-sm font-medium hover:bg-gray-50 transition border">
          Insights
        </button>

      </div>
    </div>
  );
}
