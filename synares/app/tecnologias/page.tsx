"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { synares } from "@/src/data/content";

export default function TecnologiasPage() {
  const categorias = [
    { key: "frontend", label: "Frontend", description: "Tecnologias para interface e experiência do utilizador" },
    { key: "backend", label: "Backend", description: "Tecnologias para servidor e processamento de dados" },
    { key: "ia", label: "Inteligência Artificial", description: "Ferramentas e frameworks para IA e ML" },
    { key: "infraestrutura", label: "Infraestrutura", description: "Tecnologias para deploy e operações" },
  ];

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
              Stack Tecnológico
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              As melhores tecnologias para construir soluções inovadoras, escaláveis e performáticas.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Categorias */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {categorias.map((categoria) => (
              <motion.div key={categoria.key} className="space-y-6" variants={fadeInUp}>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold font-heading">
                    {categoria.label}
                  </h2>
                  <p className="text-muted-foreground">
                    {categoria.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(synares.tecnologias[categoria.key as keyof typeof synares.tecnologias] as any[]).map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors hover:shadow-lg"
                      variants={fadeInUp}
                    >
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Abordagem */}
      <Section className="py-20 bg-card/50">
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
              Nossa Filosofia Tecnológica
            </motion.h2>

            <div className="space-y-4">
              {[
                {
                  titulo: "Tecnologias Modernas",
                  descricao:
                    "Utilizamos frameworks e bibliotecas de última geração que garantem performance, segurança e escalabilidade.",
                },
                {
                  titulo: "Boas Práticas de Engenharia",
                  descricao:
                    "Seguimos padrões reconhecidos internacionalmente para código limpo, testável e mantível.",
                },
                {
                  titulo: "Open Source First",
                  descricao:
                    "Aproveitamos a potência das comunidades open source, contribuindo quando possível.",
                },
                {
                  titulo: "Performance e Segurança",
                  descricao:
                    "Todas as soluções são otimizadas para performance máxima com segurança em primeiro lugar.",
                },
                {
                  titulo: "Local-First",
                  descricao:
                    "Prioridade ao desenvolvimento local e offline-first para garantir continuidade de serviços.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-background border border-border rounded-lg"
                  variants={fadeInUp}
                >
                  <h3 className="font-bold text-foreground mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.descricao}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Construindo o Futuro com Tecnologia
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Nossas escolhas tecnológicas são sempre orientadas pela qualidade, inovação e impacto mensurável.
            </motion.p>
            <Link href="/solucoes">
              <motion.button
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all inline-block"
                variants={fadeInUp}
              >
                Explorar Soluções
              </motion.button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}