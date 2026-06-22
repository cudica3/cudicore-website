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

  return (
    <footer className="border-t border-border/50 bg-background">
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
                className="h-8 w-auto"
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
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              {siteConfig.social.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {socialIcons[item.icon]}
                </Link>
              ))}
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