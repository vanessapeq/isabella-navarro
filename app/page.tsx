import HeroSlider from "@/components/HeroSlider";
import ArtworkCategoryCard from "@/components/ArtworkCategoryCard";
import ProjectCard from "@/components/ProjectCard";
import { artworkCategories } from "@/data/artworks";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <HeroSlider />

      <section className="section-padding">
        <div className="container-base">
          <header className="mb-8 text-center">
            <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
              Obras
            </p>
            <h2 className="mt-2 font-display text-2xl text-slate-900">
              ARTWORKS
            </h2>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artworkCategories.map((category) => (
              <ArtworkCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50/80 border-y border-slate-200/70">
        <div className="container-base">
          <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
                Destaques
              </p>
              <h2 className="mt-2 font-display text-2xl text-slate-900">
                PROJECTS
              </h2>
            </div>
            <a
              href="/projects"
              className="text-xs font-grotesk uppercase tracking-[0.18em] text-navy-azulejo"
            >
              Ver todos os projetos
            </a>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


