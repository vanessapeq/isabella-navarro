"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { individualArtworks, type ArtworkItem } from "@/data/artworks";
import ArtworkModal from "@/components/ArtworkModal";

export default function ArtworksPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f7f4] py-12 sm:py-16 lg:py-20">
      <div className="container-base">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="mb-12 grid gap-8 border-b border-slate-200/80 pb-10 md:grid-cols-[0.9fr_1.1fr] lg:mb-14 lg:items-end"
        >
          <div>
            <p className="mb-5 text-[11px] font-grotesk uppercase tracking-[0.3em] text-slate-500">
              Galeria Digital
            </p>
            <h1 className="font-display text-5xl leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
              ARTWORKS
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-800 sm:text-xl md:justify-self-end">
            Uma seleção de trabalhos que exploram a azulejaria, pintura e desenho,
            tecendo diálogos entre a tradição e o olhar contemporâneo.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 gap-6 md:columns-2 lg:gap-8"
        >
          {individualArtworks.map((artwork) => {
            const imageWidth = artwork.width ?? 1200;
            const imageHeight = artwork.height ?? 1200;

            return (
              <motion.div
                key={artwork.id}
                variants={itemVariants}
                className="mb-12 break-inside-avoid lg:mb-14"
              >
                <button
                  type="button"
                  onClick={() => setSelectedArtwork(artwork)}
                  className="group block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b73] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f8f7f4]"
                >
                  <div className="w-full overflow-hidden bg-slate-200">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    width={imageWidth}
                    height={imageHeight}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  </div>

                  <div className="pt-4">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-[10px] font-grotesk tracking-[0.15em] uppercase text-slate-400">
                        {artwork.category}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400">
                        {artwork.year}
                      </span>
                    </div>
                    <h3 className="mb-3 font-display text-3xl leading-none text-slate-950 sm:text-4xl">
                      <span className="box-decoration-clone bg-[#ff7b73] px-1.5 leading-[1.05]">
                        {artwork.title}
                      </span>
                    </h3>
                    <p className="text-sm leading-snug text-slate-900">
                      {artwork.technique}
                    </p>
                    {artwork.description && (
                      <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-slate-600">
                        {artwork.description}
                      </p>
                    )}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}
