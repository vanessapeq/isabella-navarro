"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ArtworkCategory } from "@/data/artworks";

type Props = {
  category: ArtworkCategory;
};

export default function ArtworkCategoryCard({ category }: Props) {
  const overlayColor =
    category.accent === "navy" ? "bg-navy-azulejo/70" : "bg-terracotta/70";

  return (
    <Link href={`/artworks/${category.slug}`}>
      <motion.article
        whileHover={{ scale: 1.02, y: -4 }}
        className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-soft"
      >
        <div
          className="relative h-52 sm:h-60 md:h-64 w-full overflow-hidden"
          style={{
            backgroundImage: category.imagePlaceholder,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.36),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.35),transparent_55%)] transition-transform duration-500 group-hover:scale-105" />

          <div
            className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${overlayColor}`}
          >
            <div className="flex h-full flex-col justify-end p-4">
              <span className="pill-label mb-2 bg-white/10 text-white border-white/60">
                + Info
              </span>
              <p className="text-xs text-slate-100">
                {category.shortDescription}
              </p>
            </div>
          </div>

          <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-grotesk tracking-[0.18em] uppercase text-slate-600">
            Artworks
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <h3 className="font-display text-base text-slate-900">
              {category.title}
            </h3>
            <p className="mt-1 text-xs text-slate-500 line-clamp-2">
              {category.shortDescription}
            </p>
          </div>
          <div className="ml-3">
            <span className="text-xs font-grotesk uppercase tracking-[0.18em] text-slate-500 group-hover:text-navy-azulejo">
              + Info
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}


