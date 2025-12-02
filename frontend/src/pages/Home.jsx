// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/NavBar";
import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import ProductGrid from "../components/ProductGrid";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/data/products.json", { cache: "no-store" });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        console.error(err);
        if (!cancelled) setError(err);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  if (error) return <div>Error loading page</div>;
  if (!data) return null; // or show skeleton

  return (
    <>
      <Navbar />
      <Hero hero={data.hero} />
      {/* pass categories array into CategoryList */}
      <div className="container mx-auto px-4">
        <CategoryList categories={data.categories} />
        <ProductGrid products={data.products} />
        <Brands list={data.brands} />
      </div>
      <Footer />
    </>
  );
}
