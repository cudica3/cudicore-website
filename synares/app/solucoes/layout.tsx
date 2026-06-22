import { Metadata } from "next";
import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Portfólio completo de soluções SYNARES: sistemas de gestão, IA, plataformas educacionais e automação.",
  openGraph: {
    title: "Soluções | SYNARES",
    description: "Portfólio completo de soluções SYNARES para transformação digital.",
    images: ["/synares-logo-horizontal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluções | SYNARES",
    description: "Portfólio completo de soluções SYNARES para transformação digital.",
    images: ["/synares-logo-horizontal.png"],
  },
};

export default function SolucoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}