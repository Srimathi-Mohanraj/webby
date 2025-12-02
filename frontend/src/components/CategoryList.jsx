// src/components/CategoryList.jsx
import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryList({ categories = [] }) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <section className="my-10">
        <h1 className="text-2xl font-semibold mb-4">Shop by category</h1>
        <div className="text-gray-500">No categories found.</div>
      </section>
    );
  }

  return (
    <section className="my-10">
      <h2 className="text-3xl font-semibold mb-6">Shop by category</h2>

      {/* Responsive grid: sm:2 md:3 lg:5 etc */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 font-semibold">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
