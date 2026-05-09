import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adeline Auguet — Pharmacienne Industrielle",
  description:
    "Pharmacienne industrielle passionnée par la validation et la conformité réglementaire. Experte en qualification d'équipements, validation de systèmes informatisés et gestion de projets pharmaceutiques.",
  openGraph: {
    title: "Adeline Auguet — Pharmacienne Industrielle",
    description:
      "Pharmacienne industrielle, cheffe de projet et experte en validation & qualification.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink font-inter antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
