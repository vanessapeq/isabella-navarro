import ExhibitionItem from "@/components/ExhibitionItem";
import { exhibitions } from "@/data/exhibitions";

export default function ExhibitionsPage() {
  const solo = exhibitions.filter((e) => e.section === "solo");
  const group = exhibitions.filter((e) => e.section === "group");
  const selected = exhibitions.filter((e) => e.section === "selected");

  return (
    <section className="section-padding">
      <div className="container-base space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
            Exposições
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-slate-900">
            EXHIBITIONS
          </h1>
          <p className="max-w-xl text-sm text-slate-600">
            Seleção de exposições individuais, coletivas e participações em mostras
            nacionais e internacionais.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="space-y-4">
            <h2 className="text-xs font-grotesk uppercase tracking-[0.22em] text-slate-500">
              Solo
            </h2>
            <ul className="space-y-3">
              {solo.map((exhibition) => (
                <ExhibitionItem key={exhibition.id} exhibition={exhibition} />
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-grotesk uppercase tracking-[0.22em] text-slate-500">
              Group Shows
            </h2>
            <ul className="space-y-3">
              {group.map((exhibition) => (
                <ExhibitionItem key={exhibition.id} exhibition={exhibition} />
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-grotesk uppercase tracking-[0.22em] text-slate-500">
              Selected Exhibitions
            </h2>
            <ul className="space-y-3">
              {selected.map((exhibition) => (
                <ExhibitionItem key={exhibition.id} exhibition={exhibition} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}



