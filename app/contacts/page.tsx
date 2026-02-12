import Image from "next/image";
import ContactIcon from "@/components/ContactIcon";
import { contactLinks } from "@/data/contacts";

export default function ContactsPage() {
  return (
    <section className="section-padding min-h-screen bg-slate-50/30">
      <div className="container-base">
        <header className="mb-16 space-y-4">
          <p className="text-[11px] font-grotesk tracking-[0.3em] uppercase text-slate-400">
            Contacto
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-slate-900">
            CONTATO
          </h1>
          <div className="h-[1px] w-12 bg-slate-200" />
        </header>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-grotesk uppercase tracking-[0.22em] text-slate-500">
                Redes &amp; Email
              </h2>
              <div className="space-y-4">
                {contactLinks.map((contact) => (
                  <ContactIcon key={contact.id} contact={contact} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-grotesk uppercase tracking-[0.22em] text-slate-500 font-medium">
                Projetos &amp; Colaborações
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Disponível para exposições, residências artísticas, projetos em colaboração com arquitetura
                e comissionamentos específicos em azulejaria, pintura e instalação.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-4 -left-4 z-10">
              <span className="bg-navy-azulejo text-white text-[10px] font-grotesk uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                Work in Progress
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200/50">
              <Image
                src="/images/pintura-isabella-navarro-2.jpeg"
                alt="Isabella Navarro - Work in Progress"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                quality={85}
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[10px] text-slate-400 text-right font-grotesk uppercase tracking-widest">
              Atelier em Lisboa, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



