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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="section-padding min-h-screen bg-slate-50/50">
      <div className="container-base">
        <header className="mb-16 space-y-4 text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-grotesk tracking-[0.3em] uppercase text-slate-500"
          >
            Galeria Digital
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl text-slate-900 leading-tight"
          >
            ARTWORKS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "60px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[1px] bg-slate-200 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-slate-600 leading-relaxed"
          >
            Uma seleção de trabalhos que exploram a azulejaria, pintura e desenho,
            tecendo diálogos entre a tradição e o olhar contemporâneo.
          </motion.p>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {individualArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              variants={itemVariants}
              className="break-inside-avoid"
            >
              <div
                onClick={() => setSelectedArtwork(artwork)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/50 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden sm:aspect-auto">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    width={800}
                    height={1000}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="mb-2 inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-grotesk tracking-widest uppercase text-white border border-white/30">
                      {artwork.category}
                    </span>
                    <h3 className="font-display text-xl text-white">
                      {artwork.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-grotesk tracking-[0.15em] uppercase text-slate-400">
                      {artwork.category}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      {artwork.year}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-slate-800 line-clamp-1 mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 line-clamp-2 leading-relaxed italic">
                    {artwork.technique}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}




