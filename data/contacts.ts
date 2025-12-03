export type ContactLink = {
  id: string;
  label: string;
  type: "instagram" | "email" | "behance" | "other";
  href: string;
};

export const contactLinks: ContactLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    type: "instagram",
    href: "#"
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    href: "#"
  },
  {
    id: "behance",
    label: "Behance",
    type: "behance",
    href: "#"
  }
];


