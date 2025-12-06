import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const links = ["Platform", "Solutions", "Resources", "Enterprise", "Pricing"];

  // When menu is open: lock scroll, add escape + outside-click handlers.
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  return (
    <header className="w-screen bg-black relative z-10 border-b border-gray-700">
        <div className="flex items-center justify-between h-18 px-6 md:px-12">

            {/* Brand logo */}
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <img src="https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg" alt="logo" className="max-w-10" />
                    <a className="text-xl md:text-2xl text-white font-semibold" href="#">Webflow</a>
                </div>
                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {links.map((name) => (
                        <a key={name} href="#" className="text-white text-sm font-light hover:text-blue-500 transition">
                            {name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Actions + Mobile button */}
            <div className="flex items-center gap-3">
                <div className="flex gap-3 items-center">
                    <button className="hidden md:block text-white text-xl py-4 rounded whitespace-nowrap">Log in</button>
                    <button className="bg-blue-500 px-4 py-4 rounded text-white whitespace-nowrap">Contact Sales</button>
                    <button className="hidden sm:block bg-slate-900 px-4 py-4 rounded text-white whitespace-nowrap">Start for free</button>
                </div>
                {/* Mobile toggle */}
                <button
                    className="lg:hidden p-2 rounded-md focus:outline-none"
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((s) => !s)}
                >
                    {open ? (
                    /* X icon */
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M6 6l12 12" />
                          <path d="M6 18L18 6" />
                        </svg>
                    ) : (
                    /* Hamburger */
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 6h16" />
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
        </div>

      {/* Mobile full-screen panel */}
      {open && (
        <div ref={menuRef} className="fixed inset-0 z-50 bg-black overflow-auto" role="dialog" aria-modal="true">
            <div className="flex items-center h-18 justify-between px-6 border-b border-gray-700">
                <div className="flex items-center gap-2">
                    <img src="https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg" alt="logo" className="max-w-10" />
                    <a className="text-xl md:text-2xl text-white font-semibold" href="#">Webflow</a>
                </div>

                <div className="flex items-center gap-3">
                    <button className="bg-blue-500 px-4 py-4 rounded text-white whitespace-nowrap">Contact Sales</button>
                    <button onClick={() => setOpen(false)} className="p-2 rounded-md focus:outline-none" aria-label="Close menu">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M6 6l12 12" />
                            <path d="M6 18L18 6" />
                        </svg>
                    </button>
                </div>
            </div>

            <nav className="px-6 pt-6 pb-12 space-y-4">
                {links.map((name) => (
                    <a key={name} href="#" onClick={() => setOpen(false)} className="flex items-center justify-between px-3 py-4 rounded-md text-2xl text-white hover:bg-gray-100">
                        {name}
                        <i class="ri-arrow-right-line text-2xl font-semibold"></i>
                    </a>
                ))}
                <div className="flex flex-col p-4 gap-3 border-t border-gray-700">
                    <button className="whitespace-nowrap text-xl bg-blue-500 rounded-lg text-white py-4">Get Started</button>
                    <button className="whitespace-nowrap text-xl bg-slate-900 rounded-lg text-white py-4">Login</button>
                </div>
            </nav>
        </div>
      )}
    </header>
  );
}
