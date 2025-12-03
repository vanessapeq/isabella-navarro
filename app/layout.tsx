import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk, DM_Serif_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Isabela Navarro — Visual Artist",
  description:
    "Portfolio of visual artist Isabela Navarro. Contemporary azulejos, painting, photo art, installations and more."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${dmSerif.variable} font-sans bg-background`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


