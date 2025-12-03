import ContactIcon from "@/components/ContactIcon";
import { contactLinks } from "@/data/contacts";

export default function ContactsPage() {
  return (
    <section className="section-padding">
      <div className="container-base space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
            Contacto
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-slate-900">
            CONTACTS
          </h1>
        </header>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-xs font-grotesk uppercase tracking-[0.22em] text-slate-500">
              Redes &amp; Email
            </h2>
            <div className="space-y-3">
              {contactLinks.map((contact) => (
                <ContactIcon key={contact.id} contact={contact} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-grotesk uppercase tracking-[0.22em] text-slate-500">
              Based in
            </h2>
            <div className="card-surface p-5 space-y-3">
              <p className="text-sm text-slate-700">Brazil · Portugal</p>
              <p className="text-xs text-slate-600">
                Disponível para exposições, residências artísticas, projetos em
                colaboração com arquitetura e comissionamentos específicos em azulejaria,
                pintura e instalação.
              </p>
              <p className="text-xs text-slate-600">
                Informações detalhadas de contacto (email, telefone de produção, cidades
                base, representante, etc.) podem ser inseridas aqui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


