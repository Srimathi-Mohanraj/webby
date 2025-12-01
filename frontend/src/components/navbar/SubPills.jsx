import React from "react";

export default function SubPills() {
  const pills = [
    { label: "Websites" },
    { label: "Products", caret: true },
    { label: "For Sellers" },
    { label: "Insights" },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {pills.map((p, i) => (
        <button
          key={i}
          className="flex items-center gap-1 px-4 py-2 bg-white rounded-full shadow text-sm text-gray-900"
        >
          {p.label}
          {p.caret && (
            <svg className="h-4 w-4 text-gray-700" fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
}
