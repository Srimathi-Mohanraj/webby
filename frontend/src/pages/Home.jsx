import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import Brands from '../components/Brands';
import Footer from '../components/Footer';

export default function Home() {
  const [data, setData] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch('/data/products.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const ct = res.headers.get('content-type') || '';
        if (!ct.includes('application/json')) {
          const text = await res.text();
          throw new Error('Expected JSON, got: ' + text.slice(0, 200));
        }
        const json = await res.json();

        if (!json || !Array.isArray(json.products) || !Array.isArray(json.categories)) {
          console.warn('products.json has unexpected shape', json);
        }

        if (!cancelled) {
          setData(json);
       
          if (categoryFilter === 'all' && json.categories && json.categories.length > 0) {
           
          }
        }
      } catch (err) {
        console.error('Failed to load /data/products.json:', err);
        if (!cancelled) {
          setError(err.message);
         
          setData({ categories: [], products: [], brands: [], hero: { title: '', subtitle: '', image: '' } });
        }
      }
    }

    load();
    return () => { cancelled = true; };
  }, [categoryFilter]);


  if (!data && !error) {
    return <div className="min-h-screen flex items-center justify-center">Loading…</div>;
  }


  if (error) {
  
    console.warn('Showing fallback UI due to error:', error);
  }


  const heroTitle = data?.hero?.title ?? 'Welcome';
  const heroSubtitle = data?.hero?.subtitle ?? '';
  const heroImage = data?.hero?.image ?? '/images/hero-illustration.png';

  const products = categoryFilter === 'all'
    ? (data?.products ?? [])
    : (data?.products ?? []).filter(p => p?.category === categoryFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero title={heroTitle} subtitle={heroSubtitle} image={heroImage} />

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Shop by category</h3>
          <Categories categories={data?.categories ?? []} selected={categoryFilter} onSelect={setCategoryFilter} />
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Explore products</h2>
            <div className="text-sm text-gray-500">Showing {products.length} items</div>
          </div>
          <ProductGrid products={products} />
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Brands</h3>
          <Brands brands={data?.brands ?? []} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
