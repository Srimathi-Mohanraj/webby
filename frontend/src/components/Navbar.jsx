import React, { useState } from 'react';
import Logo from './navbar/Logo';
import SearchBar from './navbar/SearchBar';
import IconButtons from './navbar/IconButtons';
import SubPills from './navbar/SubPills';

export default function Navbar() {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="w-full">
      {/* TOP BLUE BAR */}
      <div className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* PERFECT 3-COLUMN GRID */}
          <div className="grid grid-cols-3 items-center">
            
            {/* LEFT – Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* CENTER – Search */}
            <div className="flex justify-center">
              <div className="hidden sm:block w-full max-w-2xl">
                <SearchBar />
              </div>
            </div>

            {/* RIGHT – Icons */}
            <div className="flex justify-end items-center">
              <div className="hidden sm:flex">
                <IconButtons />
              </div>

              {/* Mobile search icon */}
              <button
                className="sm:hidden p-2 rounded-md hover:bg-blue-600/30 text-white"
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* SECOND ROW – SubPills */}
      <div className="bg-blue-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 flex justify-center">
            <SubPills />
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH DROPDOWN */}
      {mobileSearchOpen && (
        <div className="sm:hidden bg-white border-t p-4">
          <SearchBar mobile />
        </div>
      )}
    </header>
  );
}
