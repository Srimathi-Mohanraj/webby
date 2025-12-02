
export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          aria-label="Search everything"
          placeholder="Search everything on Webby"
          className="w-full rounded-full px-6 py-3 bg-white placeholder-gray-500 text-gray-800 ring-2 ring-white/60 focus:ring-4 focus:ring-white/40 outline-none"
        />
        <button
          aria-label="Search"
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-700 text-white rounded-full p-2 shadow-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
