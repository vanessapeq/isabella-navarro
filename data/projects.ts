export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  tags: string[];
  summary: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "rio",
    title: "Rio",
    location: "Rio de Janeiro, Brazil",
    year: "2022",
    tags: ["Site-specific", "Azulejos", "Public Space"],
    summary:
      "Instalação em azulejos para um espaço de passagem no centro do Rio, entre arquitetura histórica e fluxo contemporâneo.",
    description:
      "Uma intervenção em azulejos que ocupa um corredor de circulação, criando um percurso entre sombras azuis e reflexos dourados. Pensada para dialogar com a luz natural, a obra se transforma ao longo do dia.",
    image: "/images/projetos-desenhos-fundo-cinza-BmEpoJlx.png"
  },
  {
    slug: "lisboa",
    title: "Lisboa",
    location: "Lisboa, Portugal",
    year: "2023",
    tags: ["Residency", "Research", "Drawing"],
    summary:
      "Pesquisa em desenho, fotografia e azulejaria em diálogo com o imaginário urbano lisboeta.",
    description:
      "Durante uma residência artística, a artista desenvolveu estudos de fachadas, retábulos e pequenos oratórios urbanos. A pesquisa resultou em uma série de desenhos, fotos e protótipos de painéis de azulejos.",
    image: "/images/projeto-azulejo-contemporaneo.png"
  },
  {
    slug: "cidades-imaginadas",
    title: "Cidades Imaginadas",
    location: "Brazil / Portugal",
    year: "2021–2024",
    tags: ["Mixed Media", "Drawing", "Cartography"],
    summary:
      "Mapas e cartografias afetivas entre Brasil e Portugal, em desenhos e objetos.",
    description:
      "Série em processo que reúne cadernos de desenho, pinturas em pequeno formato e objetos tridimensionais. Os trabalhos constroem mapas íntimos entre lugares, pessoas e memórias.",
    image: "/placeholders/project-cidades"
  }
];


