import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="min-h-[70vh] lg:min-h-screen flex">
      {/* Faixa em branco à esquerda, alinhada com o menu lateral */}
      <div className="hidden lg:block w-24 bg-white" />

      <div className="flex-1 flex">
        {/* Coluna branca (texto) */}
        <div className="w-full max-w-xs bg-white flex flex-col justify-between px-10 py-12 border-r border-slate-200">
          <div className="space-y-6">
            <p className="text-[11px] font-grotesk tracking-[0.22em] uppercase text-slate-500">
              Vision with
              <br />
              cinematic clarity
            </p>
          </div>

          <div className="space-y-4 text-[11px] text-slate-600">
            <div>
              <p className="uppercase font-grotesk tracking-[0.18em] text-slate-500">
                Filmmaker &amp; Visual Artist
              </p>
              <p className="mt-1 text-slate-700">
                Working between Brazil &amp; Portugal.
              </p>
            </div>
            <div className="flex gap-6 text-slate-500">
              <div>
                <p className="uppercase font-grotesk tracking-[0.18em]">
                  Work
                </p>
                <p>Photo Art, Azulejos, Installations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem grande à direita (placeholder abstrato) */}
        <div className="relative flex-1 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.1),transparent_55%),radial-gradient(circle_at_100%_0,rgba(148,163,184,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.9),transparent_55%)]" />

          <div className="absolute inset-0 flex flex-col">
            <div className="flex items-start justify-between px-10 pt-8 text-[11px] font-grotesk uppercase tracking-[0.22em] text-slate-100">
              <p>Vision with cinematic clarity</p>
              <Link href="/projects" className="hover:text-white">
                See my work ↗
              </Link>
            </div>

            <div className="flex-1 flex items-end justify-between px-10 pb-10">
              <p className="text-[10px] font-grotesk uppercase tracking-[0.22em] text-slate-300">
                Scroll for more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


