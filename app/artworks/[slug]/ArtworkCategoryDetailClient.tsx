"use client";

import { useState } from "react";
import Image from "next/image";
import type { ArtworkCategory, ArtworkItem } from "@/data/artworks";
import ArtworkModal from "@/components/ArtworkModal";

type Props = {
  category: ArtworkCategory;
};

export default function ArtworkCategoryDetailClient({ category }: Props) {
  const [selected, setSelected] = useState<ArtworkItem | null>(null);

  return (
    <>
      <section className="section-padding">
        <div className="container-base">
          <header className="mb-10 space-y-3">
            <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
              Artworks · {category.title}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-slate-900">
              {category.title}
            </h1>
            <p className="max-w-xl text-sm text-slate-600">
              {category.longDescription}
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.artworks.map((artwork) => (
              <button
                key={artwork.id}
                type="button"
                onClick={() => setSelected(artwork)}
                className="group text-left"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-soft">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    {artwork.image ? (
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.4),transparent_55%)] transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <h2 className="font-display text-base text-slate-900">
                      {artwork.title}
                    </h2>
                    <p className="text-xs text-slate-600">
                      {artwork.year} · {artwork.technique}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />
    </>
  );
}


