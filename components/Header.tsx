"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/artworks", label: "ARTWORKS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/bio", label: "BIO" },
  { href: "/exhibitions", label: "EXHIBITIONS" },
  { href: "/contacts", label: "CONTACTS" }
];

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
  }, [pathname]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)",
        boxShadow: scrolled ? "0 10px 30px rgba(15,23,42,0.06)" : "0 0 0 rgba(0,0,0,0)"
      }}
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 backdrop-blur-md"
    >
      <div className="container-base flex h-16 items-center justify-between gap-4">
        <div className="flex flex-1 items-center">
          <div className="relative w-full max-w-xs">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search artworks, projects..."
              className="w-full rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-grotesk tracking-wide text-slate-700 placeholder:text-slate-400 shadow-sm focus:border-navy-azulejo focus:outline-none focus:ring-1 focus:ring-navy-azulejo/40"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-6 text-[11px] font-grotesk tracking-[0.22em] uppercase">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={`transition-colors hover:text-navy-azulejo ${
                    isActive ? "text-navy-azulejo" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 justify-end">
          <Link href="/" className="text-right">
            <span className="font-display text-lg tracking-[0.28em] uppercase text-slate-900">
              Isabela&nbsp;Navarro
            </span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}


