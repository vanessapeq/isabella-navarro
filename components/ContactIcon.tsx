"use client";

import { motion } from "framer-motion";
import type { ContactLink } from "@/data/contacts";

type Props = {
  contact: ContactLink;
};

const icons: Record<ContactLink["type"], JSX.Element> = {
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-slate-600 transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-slate-600 transition-colors"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
  behance: (
    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600">BE</span>
  ),
  other: (
    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600">●</span>
  )
};

export default function ContactIcon({ contact }: Props) {
  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 4 }}
      className="group flex items-center gap-4 transition-all"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors">
        {icons[contact.type]}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-light text-slate-700 group-hover:text-slate-900 transition-colors">
          {contact.label}
        </span>
      </div>
    </motion.a>
  );
}


