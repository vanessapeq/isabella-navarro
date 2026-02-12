export type Exhibition = {
  id: string;
  title: string;
  location: string;
  year: string;
  section: "solo" | "group" | "selected";
};

export const exhibitions: Exhibition[] = [
  {
    id: "ex-01",
    title: "Arte Sacra Bienal",
    location: "São Paulo, Brazil",
    year: "2024",
    section: "selected"
  },
  {
    id: "ex-02",
    title: "Entre Retábulos",
    location: "Rio de Janeiro, Brazil",
    year: "2023",
    section: "solo"
  },
  {
    id: "ex-03",
    title: "Azulejos em Trânsito",
    location: "Lisboa, Portugal",
    year: "2023",
    section: "solo"
  },
  {
    id: "ex-04",
    title: "Cartografias Afetivas",
    location: "Porto, Portugal",
    year: "2022",
    section: "group"
  },
  {
    id: "ex-05",
    title: "Cidade Latente",
    location: "Rio de Janeiro, Brazil",
    year: "2021",
    section: "group"
  },
  {
    id: "ex-06",
    title: "Photo Art Festival",
    location: "Curitiba, Brazil",
    year: "2020",
    section: "selected"
  }
];



