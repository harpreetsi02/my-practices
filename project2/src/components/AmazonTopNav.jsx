import React from "react";

const AmazonTopNav = () => {
  return (
    <header className="bg-[#131921] text-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-2 sm:px-4">
        {/* Logo */}
        <div className="flex items-center gap-1 pr-4 cursor-pointer">
          <div className="flex items-end leading-none">
            <span className="text-2xl font-bold italic text-[#ff9900]">
              amazon
            </span>
            <span className="text-sm font-semibold ml-0.5">.in</span>
          </div>
        </div>

        {/* Deliver to block */}
        <button className="hidden lg:flex flex-col justify-center px-2 py-1 rounded-sm hover:outline hover:outline-white/70">
          <div className="flex items-center gap-1 text-[10px] text-gray-200">
            <LocationIcon className="h-4 w-4" />
            <span>Delivering to Delhi 110055</span>
          </div>
          <span className="text-[11px] font-bold">Update location</span>
        </button>

        {/* Search bar */}
        <div className="ml-2 flex flex-1 items-stretch">
          {/* "All" dropdown */}
          <button className="hidden sm:flex items-center gap-1 rounded-l-md bg-[#e6e6e6] px-3 text-xs text-black border border-transparent hover:bg-[#d4d4d4]">
            <span>All</span>
            <ChevronDownIcon className="h-3 w-3" />
          </button>

          {/* Input */}
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="w-full text-sm px-3 py-2 outline-none border-none
                       bg-white placeholder-gray-500
                       sm:rounded-none rounded-l-md"
          />

          {/* Search button */}
          <button className="flex items-center justify-center rounded-r-md bg-[#febd69] px-3 sm:px-4 hover:bg-[#f3a847]">
            <SearchIcon className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Right section */}
        <div className="ml-3 flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold whitespace-nowrap">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-1 px-1 py-1 hover:outline hover:outline-white/70 rounded-sm">
            <span className="text-xs">🇮🇳</span>
            <span>EN</span>
            <ChevronDownIcon className="h-3 w-3" />
          </button>

          {/* Account & Lists */}
          <button className="hidden md:flex flex-col px-1 py-1 hover:outline hover:outline-white/70 rounded-sm text-left">
            <span className="text-[10px] font-normal">Hello, sign in</span>
            <span className="text-[11px] font-bold flex items-center gap-1">
              Account &amp; Lists
              <ChevronDownIcon className="h-3 w-3" />
            </span>
          </button>

          {/* Returns & Orders */}
          <button className="hidden sm:flex flex-col px-1 py-1 hover:outline hover:outline-white/70 rounded-sm text-left">
            <span className="text-[10px] font-normal">Returns</span>
            <span className="text-[11px] font-bold">&amp; Orders</span>
          </button>

          {/* Cart */}
          <button className="flex items-center gap-1 px-2 py-1 hover:outline hover:outline-white/70 rounded-sm">
            <div className="relative">
              <CartIcon className="h-7 w-7" />
              <span className="absolute -top-1 left-3 text-xs font-bold text-[#f08804]">
                0
              </span>
            </div>
            <span className="hidden sm:inline text-[11px] font-bold">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

/* ==== Small SVG icon components ==== */

const LocationIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C8.7 2 6 4.7 6 8c0 4.2 4.4 9.3 5.7 10.8.2.3.6.3.8 0C13.6 17.3 18 12.2 18 8c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 5.5 12 5.5s2.5 1.1 2.5 2.5S13.4 10.5 12 10.5z" />
  </svg>
);

const ChevronDownIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
      clipRule="evenodd"
    />
  </svg>
);

const SearchIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10 4a6 6 0 104.47 10.03l4.25 4.25a1 1 0 001.42-1.42l-4.25-4.25A6 6 0 0010 4zm-4 6a4 4 0 118 0 4 4 0 01-8 0z" />
  </svg>
);

const CartIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7 4h-.8a1 1 0 000 2H7l1.2 8.4A2 2 0 0010.18 16h7.64a2 2 0 001.98-1.6L21 8H8.22L7.9 5.8A2 2 0 007 4zM10 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

export default AmazonTopNav;
