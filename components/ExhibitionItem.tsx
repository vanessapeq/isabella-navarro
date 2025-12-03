"use client";

import { motion } from "framer-motion";
import type { Exhibition } from "@/data/exhibitions";

type Props = {
  exhibition: Exhibition;
};

export default function ExhibitionItem({ exhibition }: Props) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex items-start gap-4 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3 hover:bg-navy-soft/60 transition-colors"
    >
      <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-[6px] border border-slate-300 bg-white shadow-sm">
        <div className="h-2 w-2 rounded-[4px] bg-navy-azulejo/70 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-sm font-medium text-slate-900">
            {exhibition.title}
          </p>
          <span className="text-[11px] font-grotesk tracking-[0.18em] uppercase text-slate-500">
            {exhibition.year}
          </span>
        </div>
        <p className="text-xs text-slate-600">{exhibition.location}</p>
      </div>
    </motion.li>
  );
}


