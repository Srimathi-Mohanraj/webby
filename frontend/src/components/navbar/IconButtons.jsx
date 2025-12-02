export default function IconButtons() {
  return (
    <nav className="flex items-center gap-6 text-white">

      {/* FAVORITES */}
      <button className="flex flex-col items-center gap-1">
        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.6">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <span className="text-xs">Favorites</span>
      </button>

      {/* CART */}
      <button className="relative flex flex-col items-center gap-1">
        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.6">
          <path d="M6 6h15l-1.5 9h-12z"/>
          <circle cx="9" cy="20" r="1" fill="white"/>
          <circle cx="19" cy="20" r="1" fill="white"/>
        </svg>
        <span className="absolute -top-1 -right-1 bg-yellow-500 px-2 py-0.5 text-[10px] rounded-full">2</span>
        <span className="text-xs">Cart</span>
      </button>

      {/* SIGN IN */}
      <button className="flex flex-col items-center gap-1">
        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.6">
          <circle cx="12" cy="7" r="4" />
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        </svg>
        <span className="text-xs">Sign In</span>
      </button>
    </nav>
  );
}
