"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/artworks";

const SLIDE_DURATION = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  const current = heroSlides[index];

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="section-padding pt-8">
      <div className="container-base">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50/80 shadow-soft">
          <div className="relative aspect-[16/8] w-full overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.65), transparent 55%), radial-gradient(circle at 100% 100%, rgba(201,106,74,0.32), transparent 55%), radial-gradient(circle at 0% 100%, rgba(31,60,136,0.38), transparent 55%)",
                  backgroundColor: "white"
                }}
              >
                <div className="absolute inset-6 sm:inset-10 rounded-2xl border border-white/70 bg-white/40 backdrop-blur-sm" />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.18),transparent_55%)]" />

            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous slide"
              className="group absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/70 text-slate-700 shadow-soft transition hover:bg-white hover:text-navy-azulejo"
            >
              <span className="text-xs group-hover:-translate-x-0.5 transition-transform">
                ◀
              </span>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next slide"
              className="group absolute right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/70 text-slate-700 shadow-soft transition hover:bg-white hover:text-navy-azulejo"
            >
              <span className="text-xs group-hover:translate-x-0.5 transition-transform">
                ▶
              </span>
            </button>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-6">
              <div className="max-w-lg rounded-2xl bg-white/80 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-grotesk tracking-[0.22em] uppercase text-slate-500 mb-1">
                  Destaque
                </p>
                <h2 className="font-display text-lg sm:text-xl text-slate-900">
                  {current.title}
                </h2>
                <p className="mt-1 text-xs text-slate-600">
                  {current.year} · {current.technique}
                </p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-2 pb-3">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Ir para slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="group"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-6 bg-navy-azulejo"
                        : "w-2 bg-slate-300 group-hover:bg-slate-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


