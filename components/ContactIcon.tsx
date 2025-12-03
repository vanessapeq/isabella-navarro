"use client";

import { motion } from "framer-motion";
import type { ContactLink } from "@/data/contacts";

type Props = {
  contact: ContactLink;
};

const icons: Record<ContactLink["type"], JSX.Element> = {
  instagram: (
    <span className="text-lg" aria-hidden="true">
      ⧉
    </span>
  ),
  email: (
    <span className="text-lg" aria-hidden="true">
      ✉
    </span>
  ),
  behance: (
    <span className="text-lg" aria-hidden="true">
      Bē
    </span>
  ),
  other: (
    <span className="text-lg" aria-hidden="true">
      ◎
    </span>
  )
};

export default function ContactIcon({ contact }: Props) {
  return (
    <motion.a
      href={contact.href}
      whileHover={{ y: -2, scale: 1.02 }}
      className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-soft"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-soft text-navy-azulejo">
        {icons[contact.type]}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium text-slate-900">
          {contact.label}
        </span>
        <span className="text-[11px] font-grotesk uppercase tracking-[0.18em] text-slate-500 group-hover:text-navy-azulejo">
          Open
        </span>
      </div>
    </motion.a>
  );
}


