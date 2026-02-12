export type ContactLink = {
  id: string;
  label: string;
  type: "instagram" | "email" | "behance" | "other";
  href: string;
};

export const contactLinks: ContactLink[] = [
  {
    id: "instagram",
    label: "@isabellanavarro.art",
    type: "instagram",
    href: "https://www.instagram.com/isabellanavarro.art/"
  },
  {
    id: "email",
    label: "isabellanavarro@gmail.com",
    type: "email",
    href: "mailto:isabellanavarro@gmail.com"
  }
];



