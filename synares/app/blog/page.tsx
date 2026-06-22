"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { blogPosts, blogCategories } from "@/src/data/blog-posts";
import { Calendar, User, Tag, Clock } from "lucide-react";

export default function BlogPage() {
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
              Blog
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Artigos, insights e tendências sobre tecnologia, inteligência artificial e transformação digital.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Categorias */}
      <Section className="py-16">
        <Container>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-2xl font-bold font-heading"
              variants={fadeInUp}
            >
              Categorias
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {blogCategories.map((category, idx) => (
                <motion.button
                  key={idx}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors text-left"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-2">
                    <Tag className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{category.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Artigos */}
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
              className="text-2xl font-bold font-heading"
              variants={fadeInUp}
            >
              Artigos Recentes
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.article
                  key={idx}
                  className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
                  variants={fadeInUp}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("pt-PT", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Sobre o Blog */}
      <Section className="py-20">
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
              Sobre o Blog
            </motion.h2>

            <motion.div className="space-y-4 text-muted-foreground" variants={fadeInUp}>
              <p>
                O blog do SYNARES é um espaço dedicado ao compartilhamento de conhecimento,
                insights e boas práticas sobre tecnologia, inteligência artificial, programação
                e transformação digital.
              </p>
              <p>
                Aqui você encontrará artigos sobre as tecnologias que utilizamos, tendências
                do mercado, estudos de caso e reflexões sobre inovação e educação
                digital.
              </p>
              <p>
                Acompanhe nossos artigos para ficar atualizado sobre o que está acontecendo
                no mundo da tecnologia e descobrir como a transformação digital pode impulsionar
                o sucesso do seu negócio.
              </p>
            </motion.div>

            <motion.h3
              className="text-xl font-bold font-heading pt-6"
              variants={fadeInUp}
            >
              Principais Tópicos
            </motion.h3>

            <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer}>
              {[
                "Desenvolvimento Full-Stack",
                "Inteligência Artificial",
                "Automação de Processos",
                "Educação Digital",
                "Arquitetura de Sistemas",
                "Inovação Tecnológica",
              ].map((topic, idx) => (
                <motion.div
                  key={idx}
                  className="p-3 bg-card border border-border rounded flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-semibold">{topic}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}