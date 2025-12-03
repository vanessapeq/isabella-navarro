"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-soft"
    >
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.5),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(201,106,74,0.45),transparent_55%)] transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-grotesk uppercase tracking-[0.18em] text-slate-600">
          {project.location}
        </div>
      </div>
      <div className="p-5 sm:p-6 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-lg text-slate-900">
            {project.title}
          </h3>
          <span className="text-[11px] font-grotesk tracking-[0.18em] uppercase text-slate-500">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-slate-600">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-terracotta-soft px-3 py-1 text-[10px] font-grotesk uppercase tracking-[0.18em] text-terracotta"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-1">
          <span className="text-xs font-grotesk uppercase tracking-[0.18em] text-navy-azulejo">
            Ver projeto
          </span>
        </div>
      </div>
    </motion.article>
  );
}


