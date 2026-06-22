import { Metadata } from "next";
import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história, missão, visão e valores do SYNARES. Tecnologia conectada ao progresso.",
  openGraph: {
    title: "Sobre | SYNARES",
    description: "Conheça a história, missão, visão e valores do SYNARES.",
    images: ["/synares-logo-horizontal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre | SYNARES",
    description: "Conheça a história, missão, visão e valores do SYNARES.",
    images: ["/synares-logo-horizontal.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}