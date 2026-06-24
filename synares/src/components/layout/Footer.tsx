import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/src/data/site";
import { navigation } from "@/src/data/navigation";
import { Container } from "@/src/components/ui/container";

const socialIcons: Record<string, string> = {
  linkedin: "in",
  github: "gh",
  twitter: "𝕏",
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = siteConfig.contact?.phone || "";

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <Container as="footer">
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" aria-label="SYNARES - Voltar ao início">
              <Image
                src={siteConfig.logo.horizontal}
                alt="SYNARES"
                width={140}
                height={36}
                className="h-8 w-auto drop-shadow-lg"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>geral@synares.com</li>
            </ul>
          </div>

          {/* Contact Actions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contacto</h3>
            <div className="flex gap-3">
              <a
                href={`sms:${phone.replace(/\s+/g, '')}`}
                className="px-4 py-2 bg-linear-to-r from-brandBlue to-brandPurple text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                SMS
              </a>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="px-4 py-2 bg-transparent border border-border text-muted-foreground hover:border-brandBlue hover:text-primary rounded-lg transition-all duration-200"
              >
                Chamar
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 py-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}