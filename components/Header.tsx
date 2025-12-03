"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 border-r border-slate-200 bg-white/95 px-8 py-10 lg:flex flex-col justify-between">
      <div className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
            <span className="font-display text-xl tracking-[0.28em]">IN</span>
          </div>
          <div className="text-[11px] font-grotesk uppercase tracking-[0.22em] text-slate-500">
            <p>Hi, welcome to</p>
            <p className="text-slate-700">Isabela Navarro</p>
          </div>
        </div>

        <nav className="space-y-2 text-xs font-grotesk uppercase tracking-[0.22em]">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={`block py-1.5 transition-colors ${
                    isActive ? "text-navy-azulejo" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-4 text-[11px] text-slate-500">
        <p className="uppercase font-grotesk tracking-[0.18em]">
          Filmmaker / Visual Artist
        </p>
        <div className="flex flex-col gap-1">
          <p>Based in Brazil</p>
          <p>Working between Brazil &amp; Portugal</p>
        </div>
      </div>
    </aside>
  );
}

