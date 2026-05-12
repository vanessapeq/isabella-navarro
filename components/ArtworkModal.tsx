"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ArtworkItem } from "@/data/artworks";

type Props = {
  artwork: ArtworkItem | null;
  onClose: () => void;
};

export default function ArtworkModal({ artwork, onClose }: Props) {
  const imageWidth = artwork?.width ?? 1200;
  const imageHeight = artwork?.height ?? 1200;

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6 backdrop-blur-md sm:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-3 text-slate-950 shadow-lg transition-colors hover:bg-[#ff7b73] sm:right-6 sm:top-6"
            aria-label="Fechar imagem ampliada"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <motion.div
            className="relative flex max-h-[90vh] max-w-[94vw] items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={imageWidth}
              height={imageHeight}
              sizes="94vw"
              quality={100}
              priority
              className="max-h-[90vh] w-auto max-w-[94vw] object-contain shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
