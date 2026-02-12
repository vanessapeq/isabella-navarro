export type ContactLink = {
  id: string;
  label: string;
  type: "instagram" | "email" | "behance" | "other";
  href: string;
};

export const contactLinks: ContactLink[] = [
  {
    id: "instagram",
    label: "@isabellanavarro_arte",
    type: "instagram",
    href: "https://www.instagram.com/isabellanavarro_arte/"
  },
  {
    id: "email",
    label: "isabella.navarro.arte@gmail.com",
    type: "email",
    href: "mailto:isabella.navarro.arte@gmail.com"
  }
];



