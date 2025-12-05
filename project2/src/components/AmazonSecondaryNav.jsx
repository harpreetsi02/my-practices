import React from "react";

const AmazonSecondaryNav = () => {
  const items = [
    { label: "Fresh", hasDropdown: true },
    { label: "MX Player" },
    { label: "Sell" },
    { label: "Bestsellers" },
    { label: "Mobiles" },
    { label: "Today's Deals" },
    { label: "Customer Service" },
    { label: "Prime", hasDropdown: true },
    { label: "New Releases" },
    { label: "Amazon Pay" },
    { label: "Electronics" },
    { label: "Fashion" },
    { label: "Home & Kitchen" },
    { label: "Books", isActive: true },
    { label: "Computers" },
  ];

  return (
    <nav className="bg-[#232f3e] text-white border-b-[3px] border-[#f3a847]">
      <div className="mx-auto flex max-w-7xl items-center h-10 px-2 sm:px-4 overflow-x-auto scrollbar-hide">
        {/* Left: Menu All */}
        <button className="flex items-center gap-1 px-2 py-1 mr-2 rounded-sm hover:outline hover:outline-white/70 whitespace-nowrap">
          <HamburgerIcon className="h-4 w-4" />
          <span className="text-sm font-semibold">All</span>
        </button>

        {/* Center: links */}
        <ul className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
          {items.map((item) => (
            <li key={item.label}>
              <button
                className={`flex items-center gap-1 px-1.5 py-1 whitespace-nowrap
                  hover:outline hover:outline-white/70
                  ${
                    item.isActive
                      ? "border border-white"
                      : "border border-transparent"
                  }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDownIcon className="h-3 w-3 inline-block" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

/* ==== Icons ==== */

const HamburgerIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm0 6h14a1 1 0 100-2H3a1 1 0 100 2zm0 6h14a1 1 0 100-2H3a1 1 0 100 2z" />
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

export default AmazonSecondaryNav;
