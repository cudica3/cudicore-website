import { Metadata } from "next";
import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Entre em contacto com o SYNARES. Malanje, Angola. +244 941 120 038. Transformação digital e inovação tecnológica.",
  openGraph: {
    title: "Contacto | SYNARES",
    description: "Entre em contacto com o SYNARES para discutir projetos de transformação digital.",
    images: ["/synares-logo-horizontal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | SYNARES",
    description: "Entre em contacto com o SYNARES para discutir projetos de transformação digital.",
    images: ["/synares-logo-horizontal.png"],
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}