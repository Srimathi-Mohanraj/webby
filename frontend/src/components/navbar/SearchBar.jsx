import React from "react";

export default function SearchBar({ mobile = false }) {
  return (
    <div className={`w-full ${mobile ? "block" : ""}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search everything on Webby"
          className="w-full py-3 pl-5 pr-14 bg-white rounded-full shadow text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {/* Search Button */}
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
