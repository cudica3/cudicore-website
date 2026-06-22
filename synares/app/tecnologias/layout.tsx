import { Metadata } from "next";
import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = {
  title: "Tecnologias",
  description: "Stack tecnológico SYNARES: Next.js, React, Node.js, PostgreSQL, OpenAI e mais. Tecnologias modernas para soluções inovadoras.",
  openGraph: {
    title: "Tecnologias | SYNARES",
    description: "Stack tecnológico SYNARES: as melhores tecnologias para construir soluções inovadoras.",
    images: ["/synares-logo-horizontal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnologias | SYNARES",
    description: "Stack tecnológico SYNARES: as melhores tecnologias para construir soluções inovadoras.",
    images: ["/synares-logo-horizontal.png"],
  },
};

export default function TecnologiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}