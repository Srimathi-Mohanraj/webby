import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import IconButtons from "./IconButtons";
import SubPills from "./SubPills";

export default function NavBar() {
  return (
    <header className="w-full">
      {/* TOP NAVBAR */}
      <div className="w-full bg-[#0D47D9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* LEFT — LOGO */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* CENTER — SEARCH BAR */}
            <div className="hidden md:flex flex-1 justify-center">
              <SearchBar />
            </div>

            {/* RIGHT — ICONS */}
            <div className="flex-shrink-0">
              <IconButtons />
            </div>
          </div>

          {/* MOBILE SEARCH — SHOW BELOW LOGO */}
          <div className="block md:hidden mt-3 pb-3">
            <SearchBar />
          </div>

        </div>
      </div>

      {/* SUB PILLS BAR */}
      <SubPills />

    </header>
  );
}
