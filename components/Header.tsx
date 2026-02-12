"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/artworks", label: "ARTWORKS" },
  { href: "/bio", label: "BIO" },
  { href: "/contacts", label: "CONTATO" }
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white/90 backdrop-blur-md px-6 py-4 lg:hidden">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300">
            <span className="font-display text-xs tracking-[0.2em]">IN</span>
          </div>
          <span className="text-[10px] font-grotesk uppercase tracking-[0.2em] font-medium text-slate-900">
            Isabella Navarro
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-8 lg:hidden">
          <nav className="flex flex-col gap-6 text-sm font-grotesk uppercase tracking-[0.3em]">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${isActive ? "text-navy-azulejo" : "text-slate-500"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-12 left-8 space-y-4 text-[10px] text-slate-400 font-grotesk uppercase tracking-[0.2em]">
            <p>Based in Lisbon</p>
            <p>Brazil & Portugal</p>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white/95 px-8 py-10 lg:flex flex-col justify-between">
        <div className="space-y-12">
          <Link href="/" className="flex items-center gap-3 decoration-transparent">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
              <span className="font-display text-xl tracking-[0.28em]">IN</span>
            </div>
            <div className="text-[11px] font-grotesk uppercase tracking-[0.22em] text-slate-700">
              <p className="font-medium">Isabella Navarro</p>
            </div>
          </Link>

          <nav className="space-y-2 text-xs font-grotesk uppercase tracking-[0.22em]">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block py-1.5 transition-colors ${isActive ? "text-navy-azulejo" : "text-slate-500 hover:text-slate-800"
                      }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-4 text-[11px] text-slate-400">
          <div className="flex flex-col gap-1 uppercase font-grotesk tracking-[0.18em]">
            <p>Based in Lisbon</p>
            <p>Brazil & Portugal</p>
          </div>
        </div>
      </aside>
    </>
  );
}


