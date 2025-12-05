import React from "react";

const AmazonFooter = () => {
  const topColumns = [
    {
      title: "Get to Know Us",
      links: ["About Amazon", "Careers", "Press Releases", "Amazon Science"],
    },
    {
      title: "Connect with Us",
      links: ["Facebook", "Twitter", "Instagram"],
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Protect and Build Your Brand",
        "Amazon Global Selling",
        "Supply to Amazon",
        "Become an Affiliate",
        "Fulfilment by Amazon",
        "Advertise Your Products",
        "Amazon Pay on Merchants",
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        "Your Account",
        "Returns Centre",
        "Recalls and Product Safety Alerts",
        "100% Purchase Protection",
        "Amazon App Download",
        "Help",
      ],
    },
  ];

  const bottomColumns = [
    {
      title: "AbeBooks",
      text: ["Books, art", "& collectibles"],
    },
    {
      title: "Amazon Web Services",
      text: ["Scalable Cloud", "Computing Services"],
    },
    {
      title: "Audible",
      text: ["Download", "Audio Books"],
    },
    {
      title: "IMDb",
      text: ["Movies, TV", "& Celebrities"],
    },
    {
      title: "Shopbop",
      text: ["Designer", "Fashion Brands"],
    },
    {
      title: "Amazon Business",
      text: ["Everything For", "Your Business"],
    },
    {
      title: "Prime Now",
      text: ["2-Hour Delivery", "on Everyday Items"],
    },
    {
      title: "Amazon Prime Music",
      text: [
        "100 million songs, ad-free",
        "Over 15 million podcast episodes",
      ],
    },
  ];

  return (
    <footer className="mt-10 text-sm text-gray-300">
      {/* Top 4 columns */}
      <div className="bg-[#232f3e]">
        <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {topColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-2 text-white text-base font-bold">
                {col.title}
              </h3>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li
                    key={link}
                    className="hover:underline cursor-pointer text-[13px]"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Middle logo + buttons */}
      <div className="bg-[#232f3e] border-t border-[#3a4553]">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Logo */}
          <div className="flex items-end leading-none cursor-pointer">
            <span className="text-2xl font-bold italic text-[#ff9900]">
              amazon
            </span>
            <span className="text-sm font-semibold ml-0.5 text-white">.in</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-gray-500 rounded-sm px-3 py-1 text-xs hover:border-gray-300">
              <GlobeIcon className="h-4 w-4" />
              <span>English</span>
            </button>

            <button className="flex items-center gap-2 border border-gray-500 rounded-sm px-3 py-1 text-xs hover:border-gray-300">
              <span className="text-xs">🇮🇳</span>
              <span>India</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom product / brand links */}
      <div className="bg-[#131a22]">
        <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 text-[12px]">
          {bottomColumns.map((col) => (
            <div key={col.title}>
              <div className="font-semibold text-gray-200">{col.title}</div>
              {col.text.map((line, idx) => (
                <div key={idx} className="text-gray-400">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Legal text */}
        <div className="mx-auto max-w-6xl px-4 pb-8 text-[11px] text-center text-gray-400 space-y-1">
          <div className="space-x-4">
            <span className="hover:underline cursor-pointer">
              Conditions of Use &amp; Sale
            </span>
            <span className="hover:underline cursor-pointer">Privacy Notice</span>
            <span className="hover:underline cursor-pointer">
              Interest-Based Ads
            </span>
          </div>
          <div>© 1996-2025, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
    </footer>
  );
};

/* === small globe icon === */

const GlobeIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.5 2 2 6.48 2 12s4.5 10 10 10 10-4.48 10-10S17.5 2 12 2zm6.93 9h-2.12a15.78 15.78 0 00-1.2-5.01A8.02 8.02 0 0118.93 11zM12 4c.9 0 2.45 1.95 3.21 5H8.79C9.55 5.95 11.1 4 12 4zM8.08 5.99A15.78 15.78 0 006.19 11H4.07a8.02 8.02 0 014.01-5.01zM4.07 13h2.12a15.78 15.78 0 001.89 5.01A8.02 8.02 0 014.07 13zm7.93 7c-.9 0-2.45-1.95-3.21-5h6.42C14.45 18.05 12.9 20 12 20zm3.92-3.99A15.78 15.78 0 0016.81 13h2.12a8.02 8.02 0 01-4.01 5.01z" />
  </svg>
);

export default AmazonFooter;
