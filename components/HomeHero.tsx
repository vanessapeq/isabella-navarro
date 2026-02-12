import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="min-h-[70vh] lg:min-h-screen flex">
      {/* A coluna de menu já vem do Header (aside fixo). Aqui só temos o bloco de imagem à direita. */}
      <div className="relative flex-1 overflow-hidden bg-slate-900">
        <Image
          src="/images/IsabellaNavarro_PremioBrasileiraChiado-21.jpg"
          alt="Isabela Navarro - Prémio Brasileira do Chiado"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(0,0,0,0.1),transparent_55%),linear-gradient(to_bottom,rgba(15,23,42,0.1),rgba(15,23,42,0.5))]" />

        <div className="absolute inset-0 flex flex-col">
          <div className="flex items-start justify-between px-10 pt-8 text-[11px] font-grotesk uppercase tracking-[0.22em] text-slate-100">

            <Link href="/artworks" className="hover:text-white">
              See my work ↗
            </Link>
          </div>

          <div className="flex-1 flex items-end justify-between px-10 pb-10">
            <p className="text-[10px] font-grotesk uppercase tracking-[0.22em] text-slate-100">
              Scroll for more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}




