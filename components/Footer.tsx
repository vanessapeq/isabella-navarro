import SupportLogos from "./SupportLogos";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80">
      <div className="container-base py-8 space-y-6">
        <div>
          <h3 className="text-xs font-grotesk tracking-[0.28em] uppercase text-slate-500 mb-3">
            Apoio / Support
          </h3>
          <SupportLogos />
        </div>
        <div className="flex flex-col gap-2 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Isabela Navarro. All rights reserved.</p>
          <p className="text-slate-400">
            Site desenvolvido em Next.js, TailwindCSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}



