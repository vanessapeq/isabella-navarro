"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Apoio Brasil", code: "BR" },
  { name: "Instituto Cultural", code: "IC" },
  { name: "Fomento Arte", code: "FA" }
];

export default function SupportLogos() {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-6">
      {logos.map((logo) => (
        <motion.div
          key={logo.name}
          whileHover={{ y: -2, scale: 1.02 }}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 shadow-sm"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-soft text-[11px] font-grotesk tracking-[0.18em] text-navy-azulejo">
            {logo.code}
          </div>
          <span className="text-xs text-slate-700">{logo.name}</span>
        </motion.div>
      ))}
    </div>
  );
}


