import  { useState } from "react";

const menus = [
  { key: "websites", label: "Websites", hasDropdown: true, options: ["Ecommerce", "Portfolio", "Blog"] },
  { key: "products", label: "Products", hasDropdown: true, options: ["Themes", "Plugins", "Services"] },
  { key: "for-sellers", label: "For Sellers", hasDropdown: false },
  { key: "insights", label: "Insights", hasDropdown: false },
];

function DropdownPill({ label, options = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((s) => !s)}
        onBlur={(e) => {
          //  outside the container
          if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
        }}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium whitespace-nowrap hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
      >
        <span>{label}</span>
        <svg className={`w-4 h-4 transform transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <ul
          role="menu"
          aria-label={`${label} options`}
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-44 bg-white rounded-lg shadow-lg ring-1 ring-black/5 py-1 z-40"
        >
          {options.map((opt, idx) => (
            <li key={idx} role="menuitem">
              <button
                onMouseDown={(e) => e.preventDefault()} 
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 focus:bg-gray-50"
                onClick={() => {
                 
                  console.log("clicked option:", label, opt);
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CategoryMenu() {
  return (
    <div className="w-full bg-[#E6F0FF] border-t border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav
          className="flex items-center justify-center gap-6 flex-wrap"
          aria-label="Main categories"
        >
          {menus.map((m) =>
            m.hasDropdown ? (
              <DropdownPill key={m.key} label={m.label} options={m.options} />
            ) : (
              <button
                key={m.key}
                className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium whitespace-nowrap hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                onClick={() => {
            
                  console.log("clicked:", m.label);
                }}
              >
                {m.label}
              </button>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
