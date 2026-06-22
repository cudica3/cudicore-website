import { Metadata } from "next";
import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = {
  title: "Ecossistema",
  description: "Conheça o ecossistema SYNARES: Systems, Intelligence, Play e Lab. Soluções integradas para transformação digital.",
  openGraph: {
    title: "Ecossistema | SYNARES",
    description: "Conheça o ecossistema SYNARES: Systems, Intelligence, Play e Lab.",
    images: ["/synares-logo-horizontal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecossistema | SYNARES",
    description: "Conheça o ecossistema SYNARES: Systems, Intelligence, Play e Lab.",
    images: ["/synares-logo-horizontal.png"],
  },
};

export default function EcossistemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}