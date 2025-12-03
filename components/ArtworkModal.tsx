"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ArtworkItem } from "@/data/artworks";

type Props = {
  artwork: ArtworkItem | null;
  onClose: () => void;
};

export default function ArtworkModal({ artwork, onClose }: Props) {
  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl rounded-3xl bg-white/95 p-6 shadow-soft"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500 hover:text-navy-azulejo"
            >
              Close
            </button>
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
              <div>
                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.45),transparent_55%)]" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-grotesk tracking-[0.22em] uppercase text-slate-500">
                  Obra
                </p>
                <h2 className="font-display text-xl text-slate-900">
                  {artwork.title}
                </h2>
                <p className="text-sm text-slate-600">
                  {artwork.year} · {artwork.technique}
                  {artwork.size ? ` · ${artwork.size}` : null}
                </p>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  Texto descritivo da obra. Este campo pode ser atualizado com
                  informações curatoriais, contexto da série e detalhes
                  técnicos específicos.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


