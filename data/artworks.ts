export type ArtworkItem = {
  id: string;
  title: string;
  year: string;
  technique: string;
  size?: string;
  image: string;
  category?: string;
  description?: string;
};

export type ArtworkCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  accent: "navy" | "terracotta";
  imagePlaceholder: string;
  artworks: ArtworkItem[];
};

export const artworkCategories: ArtworkCategory[] = [
  {
    slug: "azulejaria-contemporanea-religiosa",
    title: "Azulejaria Contemporânea & Religiosa",
    shortDescription: "Séries em azulejo, entre o sagrado e o contemporâneo.",
    longDescription:
      "Séries em azulejos que exploram o encontro entre o simbólico, o sagrado e o cotidiano. Peças pensadas para espaços arquitetônicos, interiores e intervenções urbanas.",
    accent: "navy",
    imagePlaceholder:
      "linear-gradient(135deg, rgba(31,60,136,0.9), rgba(198,214,255,0.9))",
    artworks: [
      {
        id: "az-01",
        title: "Retábulo Azul",
        year: "2023",
        technique: "Azulejos pintados à mão, pigmentos minerais",
        size: "120 x 80 cm",
        image: "/placeholders/azulejos-01"
      },
      {
        id: "az-02",
        title: "Litania",
        year: "2022",
        technique: "Azulejos serigrafados e ouro líquido",
        size: "80 x 80 cm",
        image: "/placeholders/azulejos-02"
      }
    ]
  },
  {
    slug: "arte-tecnologia",
    title: "Arte & Tecnologia",
    shortDescription: "Experimentos entre pintura, luz e meios digitais.",
    longDescription:
      "Instalações, projeções e pinturas que dialogam com interfaces digitais, luz e movimento. Explorações híbridas entre o analógico e o virtual.",
    accent: "terracotta",
    imagePlaceholder:
      "linear-gradient(135deg, rgba(201,106,74,0.9), rgba(255,224,208,0.9))",
    artworks: [
      {
        id: "at-01",
        title: "Pixel Sacro",
        year: "2021",
        technique: "Projeção mapeada sobre painel pintado",
        size: "Instalação site-specific",
        image: "/placeholders/arte-tecnologia-01"
      },
      {
        id: "at-02",
        title: "Luz de Código",
        year: "2020",
        technique: "LEDs, acrílico e programação generativa",
        image: "/placeholders/arte-tecnologia-02"
      }
    ]
  },
  {
    slug: "photo-art",
    title: "Photo Art",
    shortDescription:
      "Imagens fotográficas com intervenções manuais e digitais.",
    longDescription:
      "Séries fotográficas com camadas de pintura, colagem e edição digital, criando imagens entre o registro e a ficção.",
    accent: "navy",
    imagePlaceholder:
      "linear-gradient(135deg, rgba(31,60,136,0.8), rgba(15,23,42,0.95))",
    artworks: [
      {
        id: "ph-01",
        title: "Vigília",
        year: "2019",
        technique: "Fotografia impressa, acrílica e tinta a óleo",
        image: "/placeholders/photo-art-01"
      },
      {
        id: "ph-02",
        title: "Janela Dupla",
        year: "2018",
        technique: "Fotografia digital, impressão fine art",
        image: "/placeholders/photo-art-02"
      }
    ]
  },
  {
    slug: "drawings-paintings",
    title: "Drawings & Paintings",
    shortDescription: "Desenhos, pinturas e estudos gráficos.",
    longDescription:
      "Série de desenhos e pinturas em papel e tela que atravessam devoção, arquitetura, memória e geometrias frágeis.",
    accent: "terracotta",
    imagePlaceholder:
      "linear-gradient(135deg, rgba(201,106,74,0.75), rgba(244,244,245,1))",
    artworks: [
      {
        id: "dp-01",
        title: "Estudo para Fachada",
        year: "2020",
        technique: "Aquarela e grafite sobre papel",
        image: "/placeholders/drawings-01"
      },
      {
        id: "dp-02",
        title: "Mapa Intenso",
        year: "2019",
        technique: "Tinta acrílica sobre tela",
        image: "/placeholders/drawings-02"
      }
    ]
  },
  {
    slug: "spray-street",
    title: "Spray & Street",
    shortDescription: "Intervenções urbanas, murais e experimentos com spray.",
    longDescription:
      "Murais, paredes temporárias e intervenções que ocupam a cidade e dialogam com arquiteturas em trânsito.",
    accent: "navy",
    imagePlaceholder:
      "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(31,60,136,0.85))",
    artworks: [
      {
        id: "st-01",
        title: "Oratório Urbano",
        year: "2018",
        technique: "Spray sobre muro de concreto",
        image: "/placeholders/street-01"
      }
    ]
  },
  {
    slug: "objects",
    title: "Objects",
    shortDescription:
      "Objetos artísticos em relevo, cerâmica, madeira e outros materiais.",
    longDescription:
      "Objetos que combinam cerâmica, madeira, metal e pigmentos, pensando o quadro como corpo tridimensional.",
    accent: "terracotta",
    imagePlaceholder:
      "linear-gradient(135deg, rgba(201,106,74,0.9), rgba(148,121,94,0.9))",
    artworks: [
      {
        id: "ob-01",
        title: "Relicário",
        year: "2022",
        technique: "Cerâmica esmaltada e madeira",
        image: "/placeholders/objects-01"
      }
    ]
  },
  {
    slug: "objects-installations",
    title: "Objects & Installations",
    shortDescription:
      "Instalações artísticas e peças tridimensionais.",
    longDescription:
      "Peças que ocupam o espaço e dialogam com o corpo do visitante — estruturas, pendentes, altares e constelações de objetos.",
    accent: "navy",
    imagePlaceholder:
      "linear-gradient(135deg, rgba(31,60,136,0.85), rgba(148,163,184,0.95))",
    artworks: [
      {
        id: "in-01",
        title: "Capela Portátil",
        year: "2021",
        technique: "Instalação com madeira, tecido e luz",
        image: "/placeholders/installations-01"
      }
    ]
  },
  {
    slug: "large-format-1x1",
    title: "Large Format 1x1m",
    shortDescription: "Obras em grande formato, cerca de 1m x 1m.",
    longDescription:
      "Quadros em grande escala, pensados para arquitetura contemporânea, com forte presença cromática e gestual.",
    accent: "terracotta",
    imagePlaceholder:
      "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(201,106,74,0.9))",
    artworks: [
      {
        id: "lg-01",
        title: "Quase Retábulo",
        year: "2023",
        technique: "Acrílica e folha metálica sobre tela",
        size: "100 x 100 cm",
        image: "/placeholders/large-01"
      }
    ]
  }
];

export const heroSlides: ArtworkItem[] = [
  {
    id: "hero-azulejos",
    title: "Série Azulejaria Contemporânea",
    year: "2023",
    technique: "Azulejos pintados à mão",
    image: "/images/public-hero-isabela.jpg"
  },
  {
    id: "hero-photo",
    title: "Photo Art — Vigília",
    year: "2019",
    technique: "Foto + intervenção manual",
    image: "/images/isabellanavarroarteabrasileira.webp"
  }
];

export const individualArtworks: ArtworkItem[] = [
  {
    id: "3",
    title: "A Brasileira",
    category: "Pintura",
    year: "2022",
    technique: "Óleo e técnica mista sobre tela",
    image: "/images/isabellanavarroarte.webp",
    description: "Exploração cromática vibrante onde a cor assume o papel principal, criando camadas de profundidade e emoção."
  },
  {
    id: "1",
    title: "Santo António & Sagrada Família",
    category: "Azulejaria",
    year: "2023-2024",
    technique: "Painéis de azulejaria contemporânea religiosa",
    image: "/images/arte-religiosa-3.png-BklcNRl_.jpg",
    description: "A criação de uma nova estética dos azulejos presentes nas fachadas portuguesas e sua iconografia religiosa, foram inspiração para o desenvolvimento de uma série de painéis de azulejaria contemporânea religiosa. \"Santo António\" (2023), Museu de Lisboa e \"Sagrada Família\" (2024), Convento do Carmo, Lisboa, Portugal."
  },
  {
    id: "2",
    title: "Projeto Restaurante Peixaria",
    category: "Desenho",
    year: "2023",
    technique: "Desenho",
    image: "/images/projetos-desenhos-fundo-cinza.png",
    description: "Série de desenhos que exploram a gestualidade e a pureza da linha sobre superfícies neutras, buscando um diálogo entre o vazio e a forma."
  },
  {
    id: "5",
    title: "Nossa Senhora da Conceição",
    category: "Azulejaria",
    year: "2024",
    technique: "Pintura manual sobre azulejo",
    image: "/images/azulejaria-religiosa-isabella-navarro-nossa-senhora.jpg",
    description: "Reinterpretação contemporânea da iconografia sacra maranhense/portuguesa, mantendo a tradição técnica com novo frescor visual."
  },
  {
    id: "6",
    title: "Santo António II",
    category: "Azulejaria",
    year: "2023",
    technique: "Azulejaria manual pigmentada",
    image: "/images/Foto-Sto-Antonio2-CnyXKwfC.jpg",
    description: "Estudo de fragmentação e repetição em painéis religiosos para ambientes internos."
  },
  {
    id: "7",
    title: "Projeto Restaurante Peixaria",
    category: "Desenho",
    year: "2023",
    technique: "Desenho",
    image: "/images/projetos-desenhos.png",
    description: "Série de ilustrações que mesclam elementos botânicos com geometria sagrada."
  },
  {
    id: "8",
    title: "Projeto Azulejo I",
    category: "Azulejaria",
    year: "2022",
    technique: "Design modular em cerâmica",
    image: "/images/projeto-azulejo-contemporaneo.png",
    description: "Desenvolvimento de padrões autorais para produção em série limitada, unindo artesanato e design."
  },
  {
    id: "9",
    title: "Azulejaria Contemporânea",
    category: "Azulejaria",
    year: "2024",
    technique: "Painel modular em cerâmica esmaltada",
    image: "/images/azulejaria-contemporanea.png",
    description: "Uma exploração das formas geométricas e padrões rítmicos que definem a nova linguagem da azulejaria contemporânea."
  },
  {
    id: "10",
    title: "Exposição Portugal I",
    category: "Exposição",
    year: "2024",
    technique: "Registro de Exposição",
    image: "/images/exposicoes-isabella-navarro-portugal.jpg",
    description: "Obras exibidas em Portugal, explorando a relação entre tradição e contemporaneidade."
  },
  {
    id: "11",
    title: "Exposição Portugal II",
    category: "Exposição",
    year: "2024",
    technique: "Registro de Exposição",
    image: "/images/exposicoes-isabella-navarro-portugal-2.jpg",
    description: "Detalhe de montagem e exibição de obras em solo português."
  },
  {
    id: "12",
    title: "Arte & Tecnologia",
    category: "Tecnologia",
    year: "2024",
    technique: "Realidade Aumentada",
    image: "/images/arte-tecnologia-isabella-navarro.png",
    description: "Exploração de novas mídias e interatividade no processo artístico."
  },
  {
    id: "13",
    title: "Santo António Contemporâneo",
    category: "Azulejaria",
    year: "2024",
    technique: "Pintura manual sobre azulejo",
    image: "/images/azulejaria-contemporanea-isabella-navarro-santo-antonio.jpg",
    description: "Leitura contemporânea da iconografia de Santo António em suporte cerâmico."
  }
];



