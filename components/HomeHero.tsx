import Image from "next/image";
import Link from "next/link";

const homeLinks = [
  {
    href: "/bio",
    label: "Biografia",
    description: "Trajetória, pesquisa artística e atuação entre Brasil e Portugal."
  },
  {
    href: "/artworks",
    label: "Artworks",
    description: "Azulejaria, pintura, desenho, tecnologia e registros de exposição."
  },
  {
    href: "/contacts",
    label: "Contato",
    description: "Comissões, exposições, residências e colaborações."
  }
];

export default function HomeHero() {
  return (
    <main className="bg-white text-slate-950">
      <section className="relative bg-white">
        <div className="relative w-full overflow-hidden">
          <Image
            src="/images/isabella-navarro-hero-site-2.jpg"
            alt="Isabella Navarro"
            width={2048}
            height={1181}
            priority
            sizes="100vw"
            className="h-auto w-full"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(10,10,10,0.42))]" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-12">
            <h1 className="max-w-4xl font-hero text-6xl font-normal uppercase leading-[0.88] tracking-[0.02em] text-white sm:text-8xl lg:text-[128px]">
              Isabella Navarro
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
            [ Biografia ]
          </p>
          <div className="max-w-4xl">
            <h2 className="font-sans text-3xl font-medium leading-tight tracking-normal text-slate-950 sm:text-4xl lg:text-5xl">
              Artista visual brasileira baseada em Lisboa.
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              Sua produção investiga identidade, imigração, memória e fé por meio
              de pinturas, objetos, instalações interativas e azulejaria
              contemporânea. Formada pela UFRJ e doutoranda na Universidade de
              Lisboa, integra à sua prática reflexões sobre arte, tecnologia e
              processos culturais em transformação.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <nav className="border-t border-slate-200">
          {homeLinks.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group grid gap-4 border-b border-slate-200 py-6 transition-colors hover:bg-[#ff7b73] sm:grid-cols-[1fr_auto] sm:px-4 lg:py-8"
            >
              <div>
                <span className="text-[11px] font-medium text-slate-400 transition-colors group-hover:text-black/50">
                  [{String(index + 1).padStart(3, "0")}]
                </span>
                <h3 className="mt-3 font-sans text-4xl font-medium leading-none tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
                  {item.label}
                </h3>
              </div>
              <p className="max-w-sm self-end text-sm leading-6 text-slate-600 transition-colors group-hover:text-black/70">
                {item.description}
              </p>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
