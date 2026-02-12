import SupportLogos from "./SupportLogos";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80">
      <div className="container-base py-8">
        <div className="flex flex-col gap-2 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Isabella Navarro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



