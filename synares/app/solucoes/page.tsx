"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { synares } from "@/src/data/content";
import { CheckCircle, Zap } from "lucide-react";

export default function SolucõesPage() {
  return (
    <main className="pt-16">
      {/* Header */}
      <Section className="py-16 bg-linear-to-b from-background to-card/30">
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
              Nossas Soluções
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Conheça o portfólio completo de soluções inovadoras da SYNARES, desenvolvidas para impulsionar o sucesso do seu negócio.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Soluções Grid */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {synares.solucoes.map((solucao, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors space-y-4"
                  variants={fadeInUp}
                >
                  <Zap className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold font-heading">
                    {solucao.title}
                  </h3>
                  <p className="text-muted-foreground">{solucao.description}</p>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Benefícios:
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {solucao.benefits.map((benefit, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Detalhes de Soluções */}
      <Section className="py-20 bg-card/50">
        <Container>
          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {synares.solucoes.map((solucao, idx) => (
              <motion.div
                key={idx}
                className="grid md:grid-cols-2 gap-8 items-start"
                variants={fadeInUp}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-heading">
                    {solucao.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {solucao.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Benefícios:
                    </h4>
                    <ul className="space-y-2">
                      {solucao.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground text-sm"
                        >
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Casos de Utilização:
                    </h4>
                    <ul className="space-y-2">
                      {solucao.useCases.map((useCase, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground text-sm"
                        >
                          <Zap className="h-5 w-5 text-primary shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Encontre a Solução Ideal para seu Negócio
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Cada solução pode ser customizada de acordo com suas necessidades específicas. Contacte-nos para uma consulta sem compromisso.
            </motion.p>
            <Link href="/contacto">
              <motion.button
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all inline-block"
                variants={fadeInUp}
              >
                Solicitar Consulta
              </motion.button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}