"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md px-4 py-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-10 rounded-full bg-white/80 p-2 text-slate-900 backdrop-blur-md transition-colors hover:bg-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="grid md:grid-cols-[1.2fr_1fr] items-stretch min-h-[500px]">
              {/* Image side */}
              <div className="relative bg-slate-100 flex items-center justify-center p-4">
                <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full max-h-[70vh]">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                  />
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <header>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-grotesk tracking-widest uppercase text-slate-600 border border-slate-200">
                        {artwork.category}
                      </span>
                      <span className="text-[10px] font-grotesk tracking-widest uppercase text-slate-400">
                        {artwork.year}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-slate-900 leading-tight">
                      {artwork.title}
                    </h2>
                  </header>

                  <div className="space-y-4">
                    <div className="h-[1px] w-12 bg-slate-200" />

                    <div className="space-y-2">
                      <p className="text-[11px] font-grotesk tracking-[0.2em] uppercase text-slate-400">
                        Técnica
                      </p>
                      <p className="text-sm text-slate-800 font-medium italic">
                        {artwork.technique}{artwork.size ? ` · ${artwork.size}` : ""}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4">
                      <p className="text-[11px] font-grotesk tracking-[0.2em] uppercase text-slate-400">
                        Sobre a obra
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed font-light text-balance">
                        {artwork.description || "Esta obra faz parte das investigações estéticas contemporâneas da artista, explorando suporte e forma."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



