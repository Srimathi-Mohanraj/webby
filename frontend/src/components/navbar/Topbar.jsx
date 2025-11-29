import React, { useState } from "react";
import logo from "../../assets/Webby-Logo.png";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Topbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#005BEA] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">

            {/* LEFT: Logo + brand */}
            <div className="flex items-center gap-3">
              {/* larger logo on desktop, slightly smaller on mobile */}
              <img
                src={logo}
                alt="Webby Logo"
                className="object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
             
            </div>

            {/* CENTER: Search (desktop) */}
            <div className="flex-1 px-4 hidden md:flex items-center justify-center">
              <SearchBar />
            </div>

            {/* RIGHT: icons + mobile hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex">
                <NavIcons />
              </div>

              {/* mobile search toggle (visible on small screens) */}
              <div className="flex md:hidden items-center gap-2">
                <button
                  aria-label="Open search"
                  className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20"
                  onClick={() => {
                    // show mobile search by toggling a class or state (we'll render below)
                    const el = document.getElementById("mobile-search");
                    if (el) el.classList.toggle("hidden");
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                </button>

                {/* hamburger */}
                <button
                  aria-label="Open menu"
                  onClick={() => setMobileOpen((s) => !s)}
                  className="p-2 bg-white/10 rounded-md text-white hover:bg-white/20"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {mobileOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 7h16M4 12h16M4 17h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE SEARCH (hidden by default) */}
        <div id="mobile-search" className="hidden md:hidden px-4 pb-3">
          <div className="max-w-7xl mx-auto">
            <SearchBar compact />
          </div>
        </div>
      </header>

      {/* Mobile drawer (menu + icons + categories) */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        aria-hidden={!mobileOpen}
      >
        {/* overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* panel */}
        <nav className="relative w-80 h-full bg-white shadow-xl">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Webby" className="w-12 h-12 object-contain" />
              <span className="text-lg font-semibold">webby</span>
            </div>

            <div className="mt-6">
              <div className="mb-4">
                <SearchBar compact />
              </div>

              <div className="mb-4">
                <NavIcons vertical />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Browse</h4>
                <ul className="space-y-2">
                  <li className="py-2 px-3 rounded hover:bg-gray-100 cursor-pointer">Websites</li>
                  <li className="py-2 px-3 rounded hover:bg-gray-100 cursor-pointer">Products</li>
                  <li className="py-2 px-3 rounded hover:bg-gray-100 cursor-pointer">For Sellers</li>
                  <li className="py-2 px-3 rounded hover:bg-gray-100 cursor-pointer">Insights</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
