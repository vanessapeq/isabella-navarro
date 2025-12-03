export default function BioPage() {
  const timeline = [
    { year: "2024", text: "Residência artística em Lisboa, Portugal." },
    { year: "2023", text: "Série de azulejaria contemporânea apresentada em exposições no Brasil e em Portugal." },
    { year: "2021", text: "Início da série 'Cidades Imaginadas', entre desenho, foto e objeto." },
    { year: "2018", text: "Primeiras intervenções urbanas em spray e murais." }
  ];

  return (
    <section className="section-padding">
      <div className="container-base space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
            Sobre
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-slate-900">
            BIO
          </h1>
        </header>

        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start">
          <div className="aspect-[3/4] rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.7),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(31,60,136,0.5),transparent_55%)]" />

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Texto de biografia completo da artista, com formação, exposições, residências
              e principais linhas de pesquisa. Este conteúdo pode ser substituído por texto
              oficial em português e inglês, conforme necessário.
            </p>
            <p>
              A prática de Isabela atravessa azulejaria, pintura, desenho, fotografia e
              instalação. Suas obras investigam relações entre devoção, arquitetura,
              cidade, rituais cotidianos e memórias partilhadas.
            </p>
            <p>
              A artista trabalha frequentemente em colaboração com arquitetos, curadores e
              instituições, desenvolvendo projetos site-specific que respondem ao espaço
              expositivo e ao contexto urbano em que se inserem.
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="font-display text-xl text-slate-900">
            Linha do tempo
          </h2>
          <ul className="space-y-3 border-l border-slate-200 pl-4">
            {timeline.map((item) => (
              <li key={item.year} className="flex gap-3">
                <div className="-ml-[9px] mt-1 h-3 w-3 rounded-full border border-navy-azulejo bg-white" />
                <div>
                  <p className="text-xs font-grotesk uppercase tracking-[0.18em] text-slate-500">
                    {item.year}
                  </p>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}


