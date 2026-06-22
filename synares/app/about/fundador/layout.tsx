import { Metadata } from "next";
import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = {
  title: "Fundador",
  description: "Conheça Moisés Cudica da Costa, o criador do SYNARES. História, visão tecnológica e filosofia.",
  openGraph: {
    title: "Fundador | SYNARES",
    description: "Conheça Moisés Cudica da Costa, o criador do SYNARES.",
    images: ["/synares-logo-horizontal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundador | SYNARES",
    description: "Conheça Moisés Cudica da Costa, o criador do SYNARES.",
    images: ["/synares-logo-horizontal.png"],
  },
};

export default function FundadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}