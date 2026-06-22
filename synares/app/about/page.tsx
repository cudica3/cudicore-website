"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { synares } from "@/src/data/content";

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Header */}
      <Section className="py-16 bg-linear-to-b from-background to-card/30">
        <Container>
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold font-heading"
              variants={fadeInUp}
            >
              Sobre SYNARES
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl"
              variants={fadeInUp}
            >
              Conheça nossa história, missão, visão e os valores que guiam nossa jornada.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* História */}
      <Section className="py-20 bg-card/50">
        <Container>
          <motion.div
            className="max-w-3xl space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold font-heading mb-4">
                Nossa História
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                O Synares nasce da convicção de que a tecnologia deve ser acessível, inteligente e orientada para resolver problemas reais. Mais do que criar aplicações ou plataformas, a iniciativa procura desenvolver ecossistemas digitais capazes de conectar pessoas, informação e organizações de forma eficiente e sustentável.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Visão */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="max-w-3xl space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold font-heading mb-4">
                {synares.about.sections.visao.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {synares.about.sections.visao.content}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Missão */}
      <Section className="py-20 bg-card/50">
        <Container>
          <motion.div
            className="max-w-3xl space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold font-heading mb-4">
                {synares.about.sections.missao.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {synares.about.sections.missao.content}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Valores */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl font-bold font-heading"
              variants={fadeInUp}
            >
              {synares.about.sections.valores.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {synares.about.sections.valores.items.map((valor, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  variants={fadeInUp}
                >
                  <p className="text-foreground leading-relaxed">{valor}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Manifesto */}
      <Section className="py-20 bg-linear-to-b from-card/50 to-background">
        <Container>
          <motion.div
            className="max-w-3xl space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl font-bold font-heading"
              variants={fadeInUp}
            >
              {synares.about.sections.manifesto.title}
            </motion.h2>

            <motion.div
              className="prose prose-invert max-w-none"
              variants={fadeInUp}
            >
              {synares.about.sections.manifesto.content.split("\n").map(
                (paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              )}
            </motion.div>

            <motion.p className="text-sm text-muted-foreground italic" variants={fadeInUp}>
              — SYNARES
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Criador */}
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
                className="text-3xl font-bold font-heading"
                variants={fadeInUp}
              >
                Conheça o Criador
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                variants={fadeInUp}
              >
                Descubra a história e a visão de quem criou o SYNARES
              </motion.p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={fadeInUp}
            >
              <div className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg">
                <Image
                  src="/Foto-fundador.png"
                  alt="Moisés Cudica da Costa"
                  fill
                  sizes="(max-width: 640px) 200px, 320px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {synares.fundador.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com formação em {synares.fundador.formacao.join(" e ")}, Moisés desenvolveu
                  uma visão multidisciplinar que integra raciocínio analítico, gestão de
                  processos e desenvolvimento tecnológico.
                </p>
              </div>

              <div className="md:col-span-2 p-8 bg-background border border-border rounded-lg">
                <h3 className="text-2xl font-bold font-heading mb-2">
                  {synares.fundador.nome}
                </h3>
                <p className="text-primary mb-4">{synares.fundador.titulo}</p>
                <p className="text-sm text-muted-foreground mb-6">
                  {synares.fundador.origem}
                </p>
                <Link href="/about/fundador">
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all">
                    Ver Perfil Completo
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}