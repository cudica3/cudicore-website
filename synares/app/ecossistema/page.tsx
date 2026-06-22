"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { synares } from "@/src/data/content";
import { CheckCircle, Target, Award } from "lucide-react";

export default function EcossistemaPage() {
  return (
    <main className="pt-16">
      {/* Header */}
      <Section className="py-16 bg-gradient-to-b from-background to-card/30">
        <Container>
          <motion.div
            className="space-y-4 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold font-heading"
              variants={fadeInUp}
            >
              Ecossistema SYNARES
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Uma plataforma integrada de soluções tecnológicas para impulsionar a transformação digital.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Pilares do Ecossistema */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {synares.ecossistema.map((item, idx) => (
              <motion.div
                key={idx}
                className={`space-y-6 ${idx % 2 !== 0 ? "md:flex md:flex-row-reverse md:gap-12 md:items-start" : "md:flex md:gap-12 md:items-start"}`}
                variants={fadeInUp}
              >
                {/* Conteúdo Textual */}
                <div className="md:flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold font-heading text-primary mb-2">
                      {item.name}
                    </h3>
                    <h4 className="text-lg text-muted-foreground mb-4">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Abas de Informações */}
                  <div className="space-y-4">
                    {/* Objetivos */}
                    <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="h-5 w-5 text-primary" />
                        <h5 className="font-semibold">Objetivos</h5>
                      </div>
                      <ul className="space-y-2">
                        {item.objectives.map((obj, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefícios */}
                    <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="h-5 w-5 text-primary" />
                        <h5 className="font-semibold">Benefícios</h5>
                      </div>
                      <ul className="space-y-2">
                        {item.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Possibilidades Futuras */}
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg">
                      <h5 className="font-semibold mb-2 text-foreground">
                        Possibilidades Futuras
                      </h5>
                      <p className="text-sm text-muted-foreground">{item.future}</p>
                    </div>
                  </div>
                </div>

                {/* Ícone/Badge */}
                <div className="md:shrink-0 md:w-1/3 flex items-center justify-center">
                  <div className="w-full p-8 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-lg flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary/30 mb-4">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <p className="text-xl font-bold text-primary">{item.name}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Integração */}
      <Section className="py-20 bg-card/50">
        <Container>
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold font-heading">
                Integração Total do Ecossistema
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Os componentes do SYNARES trabalham juntos para criar uma plataforma coesa e
                poderosa que impulsiona a transformação digital organizacional.
              </p>
            </motion.div>

            {/* Diagrama de Integração */}
            <motion.div
              className="p-8 bg-background border border-border rounded-lg"
              variants={fadeInUp}
            >
              <div className="space-y-4">
                <div className="grid md:grid-cols-4 gap-4">
                  {synares.ecossistema.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/20 rounded-lg text-center"
                    >
                      <p className="font-bold text-primary text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-muted-foreground pt-4">
                  <p>↓ Integração Contínua ↓</p>
                  <p className="mt-2 font-semibold text-primary">
                    Plataforma Unificada de Transformação Digital
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benefícios da Integração */}
            <motion.div className="grid md:grid-cols-3 gap-6" variants={fadeInUp}>
              {[
                {
                  titulo: "Escalabilidade Sem Limites",
                  descricao:
                    "Crescimento flexível e adaptável às necessidades do seu negócio.",
                },
                {
                  titulo: "Eficiência Operacional",
                  descricao:
                    "Redução de complexidade através da integração seamless de soluções.",
                },
                {
                  titulo: "Inovação Contínua",
                  descricao:
                    "Novas funcionalidades e tecnologias agregadas regularmente.",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                  variants={fadeInUp}
                >
                  <h4 className="font-bold text-foreground mb-2">
                    {benefit.titulo}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.descricao}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="text-center space-y-6 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl font-bold font-heading"
              variants={fadeInUp}
            >
              Pronto para Transformar seu Negócio?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Descubra como o ecossistema SYNARES pode impulsionar a inovação na sua
              organização.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link href="/contacto">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all">
                  Agendar Consulta
                </button>
              </Link>
              <Link href="/solucoes">
                <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                  Explorar Soluções
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
