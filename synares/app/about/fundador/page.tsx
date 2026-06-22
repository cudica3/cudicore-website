"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { synares } from "@/src/data/content";

export default function FundadorPage() {
  const fundador = synares.fundador;

  return (
    <main className="pt-16">
      {/* Hero Premium com Foto */}
      <Section className="py-24 bg-linear-to-b from-primary/10 via-background to-background">
        <Container>
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className="relative aspect-square max-w-lg mx-auto md:mx-0 overflow-hidden rounded-2xl shadow-2xl"
              variants={fadeInUp}
            >
              <Image
                src="/Foto-fundador.png"
                alt={`${fundador.nome} - ${fundador.titulo}`}
                fill
              sizes="(max-width: 640px) 320px, 480px"
              className="object-contain"
              priority
            />
            </motion.div>

            <motion.div className="space-y-6 text-center md:text-left" variants={staggerContainer}>
              <motion.p
                className="text-primary font-semibold text-sm uppercase tracking-wider"
                variants={fadeInUp}
              >
                Conheça o Criador
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading"
                variants={fadeInUp}
              >
                {fundador.nome}
              </motion.h1>
              <motion.p className="text-xl text-primary font-medium" variants={fadeInUp}>
                {fundador.titulo}
              </motion.p>
              <motion.p className="text-muted-foreground" variants={fadeInUp}>
                {fundador.origem}
              </motion.p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Biografia */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading"
              variants={fadeInUp}
            >
              Trajetória e Formação
            </motion.h2>

            <motion.div className="space-y-6" variants={fadeInUp}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {fundador.bio}
              </p>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-xl font-bold font-heading mb-4 text-primary">
                  Formação Académica
                </h3>
                <ul className="space-y-3">
                  {fundador.formacao.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Visão Pessoal */}
      <Section className="py-20 bg-card/50">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading"
              variants={fadeInUp}
            >
              Visão Pessoal
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={fadeInUp}
            >
              {fundador.visao}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Filosofia */}
      <Section className="py-20">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading"
              variants={fadeInUp}
            >
              Filosofia de Vida
            </motion.h2>

            <motion.blockquote
              className="text-2xl md:text-3xl font-bold text-primary border-l-4 border-primary pl-8 py-6 italic"
              variants={fadeInUp}
            >
              {fundador.filosofia}
            </motion.blockquote>

            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              variants={fadeInUp}
            >
              Esta ideia resume a sua abordagem ao aprendizado, à inovação e à construção
              do Synares: evolução contínua, disciplina e compromisso com a excelência.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Missão Pessoal */}
      <Section className="py-20 bg-linear-to-r from-primary/10 to-transparent">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading"
              variants={fadeInUp}
            >
              Missão Pessoal
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              variants={fadeInUp}
            >
              {fundador.missaoPessoal}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Áreas de Interesse */}
      <Section className="py-20 bg-card/50">
        <Container>
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading text-center"
              variants={fadeInUp}
            >
              Áreas de Interesse
            </motion.h2>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
            >
              {fundador.areasInteresse.map((area, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors text-center"
                  variants={fadeInUp}
                >
                  <p className="font-semibold text-foreground text-sm">{area}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Princípios Synares */}
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
              className="text-3xl md:text-4xl font-bold font-heading text-center"
              variants={fadeInUp}
            >
              Princípios Fundamentais do Synares
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {fundador.visaoSynares.principios.map((principio, idx) => (
                <motion.div
                  key={idx}
                  className="space-y-4 p-6 bg-linear-to-b from-primary/5 to-transparent border border-primary/20 rounded-lg"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-primary font-bold text-xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {principio.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principio.descricao}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Ligação com Synares */}
      <Section className="py-20 bg-linear-to-b from-background to-card/30">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto space-y-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading"
              variants={fadeInUp}
            >
              Ligação com o Synares
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={fadeInUp}
            >
              O Synares nasceu da convicção de que a tecnologia deve ser acessível,
              inteligente e orientada para resolver problemas reais. Moisés criou essa
              iniciativa para desenvolver ecossistemas digitais capazes de conectar pessoas,
              informação e organizações de forma eficiente e sustentável, promovendo
              inovação e transformação digital com impacto duradouro.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link href="/">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all">
                  Voltar ao Início
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}