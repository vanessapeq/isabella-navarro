export type ArtworkItem = {
  id: string;
  title: string;
  year: string;
  technique: string;
  size?: string;
  image: string;
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
    image: "/placeholders/hero-azulejos"
  },
  {
    id: "hero-photo",
    title: "Photo Art — Vigília",
    year: "2019",
    technique: "Foto + intervenção manual",
    image: "/placeholders/hero-photo"
  },
  {
    id: "hero-large",
    title: "Large Format 1x1m",
    year: "2022",
    technique: "Acrílica sobre tela",
    image: "/placeholders/hero-large"
  },
  {
    id: "hero-install",
    title: "Objects & Installations",
    year: "2021",
    technique: "Instalação site-specific",
    image: "/placeholders/hero-install"
  },
  {
    id: "hero-street",
    title: "Spray & Street",
    year: "2018",
    technique: "Spray em muro urbano",
    image: "/placeholders/hero-street"
  }
];


