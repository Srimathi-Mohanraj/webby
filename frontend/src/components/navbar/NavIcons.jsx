import React from "react";



export default function NavIcons({ vertical = false }) {
  const items = [
    { label: "Favorites", icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"/>
          <path d="M12 7v5l3 3"/>
        </svg>
      )},
    { label: "Cart", icon: (
        <div className="relative">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 3h18l-2 13H7L3 3z"/>
          </svg>
          <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs px-1 rounded-full">2</span>
        </div>
      )},
    { label: "Sign In", icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="7" r="4" />
          <path d="M16 21v-2a4 4 0 00-8 0v2" />
        </svg>
      )},
  ];

  return (
    <div className={`${vertical ? "flex flex-col items-start gap-4" : "flex items-center gap-6 text-white"}`}>
      {items.map((it, i) => (
        <button key={i} className={`flex items-center gap-2 ${vertical ? "text-gray-700" : "text-white"} hover:opacity-90`}>
          {it.icon}
          <span className={`${vertical ? "text-sm" : "text-sm hidden md:inline"}`}>{it.label}</span>
        </button>
      ))}
    </div>
  );
}
