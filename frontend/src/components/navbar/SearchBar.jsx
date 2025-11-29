import React, { useState } from "react";


export default function SearchBar({ compact = false }) {
  const [q, setQ] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        
        console.log("Search:", q);
      }}
      className={compact ? "w-full" : "w-full max-w-2xl"}
    >
      <div className={`flex items-center rounded-full bg-white shadow-sm ${compact ? "px-2 py-1" : "px-4 py-2"}`}>
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search everything on Webby"
          className={`flex-1 bg-transparent border-0 focus:ring-0 text-sm ${compact ? "px-2 py-2" : "px-4 py-3"}`}
        />
        <button
          type="submit"
          className={`ml-2 ${compact ? "w-9 h-9" : "w-12 h-12"} rounded-full bg-[#003DAA] text-white flex items-center justify-center`}
          aria-label="Search"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="6" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </button>
      </div>
    </form>
  );
}
