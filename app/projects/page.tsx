import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="section-padding">
      <div className="container-base space-y-14">
        <header className="space-y-3 max-w-2xl">
          <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
            Projetos
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-slate-900">
            PROJECTS
          </h1>
          <p className="text-sm text-slate-600">
            Projetos em azulejaria, desenho, foto e instalação desenvolvidos entre
            Brasil e Portugal, em diálogo com arquitetura, cidade e práticas devocionais
            contemporâneas.
          </p>
        </header>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <section className="border-t border-slate-200/70 pt-10 space-y-6">
          <header className="space-y-2">
            <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
              Sobre
            </p>
            <h2 className="font-display text-2xl text-slate-900">BIO</h2>
          </header>
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] items-start">
            <div className="aspect-square rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.6),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(201,106,74,0.45),transparent_55%)]" />
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                Biografia condensada da artista, com foco em formação, linhas de
                pesquisa e principais exposições. Este texto pode ser atualizado com
                releases curatoriais ou versões em diferentes idiomas.
              </p>
              <p>
                A prática de Isabela se desdobra entre pintura, desenho, fotografia,
                azulejaria e instalação, atravessando temas como devoção, arquitetura,
                cidade e arquivo.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/exhibitions"
                  className="rounded-full border border-navy-azulejo/40 bg-navy-soft/60 px-4 py-1.5 text-xs font-grotesk uppercase tracking-[0.18em] text-navy-azulejo"
                >
                  Ver exposições
                </Link>
                <Link
                  href="/contacts"
                  className="rounded-full border border-terracotta/40 bg-terracotta-soft px-4 py-1.5 text-xs font-grotesk uppercase tracking-[0.18em] text-terracotta"
                >
                  Contactos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}


