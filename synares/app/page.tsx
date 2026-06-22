"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { synares } from "@/src/data/content";
import { siteConfig } from "@/src/data/site";
import { Code, Brain, Zap, Book } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-8 w-8" />,
  brain: <Brain className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
  book: <Book className="h-8 w-8" />,
};

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-linear-to-b from-background via-background to-card/30 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <Container>
          <motion.div
            className="text-center space-y-8 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Logo Destaque */}
            <motion.div
              className="flex justify-center mb-6"
              variants={fadeInUp}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src={siteConfig.logo.icon}
                  alt="SYNARES"
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight"
              variants={fadeInUp}
            >
              {synares.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {synares.hero.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              variants={fadeInUp}
            >
              {synares.hero.buttons.map((button, idx) => (
                <Link key={idx} href={button.href}>
                  <button
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      idx === 0
                        ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/25"
                        : "border border-primary text-primary hover:bg-primary/10"
                    }`}
                  >
                    {button.label}
                  </button>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Sobre Synares */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center space-y-4">
              <motion.h2
                className="text-3xl md:text-5xl font-bold font-heading"
                variants={fadeInUp}
              >
                {synares.about.title}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                {synares.about.sections.visao.content}
              </motion.p>
            </div>

            <motion.div className="grid md:grid-cols-2 gap-6 pt-8" variants={fadeInUp}>
              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold font-heading mb-3 text-primary">Missão</h3>
                <p className="text-muted-foreground">{synares.about.sections.missao.content}</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold font-heading mb-3 text-primary">Valores</h3>
                <ul className="space-y-2">
                  {synares.about.sections.valores.items.map((valor, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {valor.split(":")[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* O Que Fazemos */}
      <Section className="py-20 bg-card/50">
        <Container>
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center space-y-4">
              <motion.h2
                className="text-3xl md:text-5xl font-bold font-heading"
                variants={fadeInUp}
              >
                O Que Fazemos
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                variants={fadeInUp}
              >
                Soluções tecnológicas completas para transformação digital
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {synares.pilares.map((pilar, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                  variants={fadeInUp}
                >
                  <div className="mb-4 text-primary">
                    {iconMap[pilar.icon] || <Zap className="h-8 w-8" />}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{pilar.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {pilar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Pilares Estratégicos */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center space-y-4">
              <motion.h2
                className="text-3xl md:text-5xl font-bold font-heading"
                variants={fadeInUp}
              >
                Os Quatro Pilares do Synares
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                variants={fadeInUp}
              >
                Quatro áreas fundamentais que impulsionam nossa inovação
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {synares.ecossistema.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  variants={fadeInUp}
                >
                  <div className="mb-4 text-primary">
                    {iconMap[["code", "brain", "zap", "book"][idx]] || <Zap className="h-8 w-8" />}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* A Nossa Visão */}
      <Section className="py-20 bg-linear-to-b from-card/50 to-background">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto space-y-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold font-heading"
              variants={fadeInUp}
            >
              A Nossa Visão
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={fadeInUp}
            >
              Acreditamos que África possui talento, criatividade e potencial para liderar a próxima geração de inovação tecnológica.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={fadeInUp}
            >
              O nosso objetivo é contribuir para um futuro onde organizações, instituições e comunidades possam crescer através de soluções digitais inteligentes, acessíveis e sustentáveis.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="text-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold font-heading"
              variants={fadeInUp}
            >
              Junte-se à Jornada
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              O futuro é construído por quem cria soluções. Descubra como as soluções do SYNARES podem impulsionar sua transformação digital.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              variants={fadeInUp}
            >
              <Link href="/ecossistema">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25">
                  Conhecer o Projeto
                </button>
              </Link>
              <Link href="/contacto">
                <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                  Explorar o Ecossistema
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}