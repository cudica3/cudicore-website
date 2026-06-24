"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { synares } from "@/src/data/content";
import { Mail, Phone, MapPin, Code, Users, MessageCircle, Send } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário
    console.log("Formulário enviado:", formData);
    setEnviado(true);
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    setTimeout(() => setEnviado(false), 3000);
  };

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
              Contacto
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Fale connosco e descubra como podemos ajudar a transformar o seu negócio.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Formulário e Informações */}
      <Section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
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
                Envie-nos uma Mensagem
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Seu nome"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    placeholder="seu.email@exemplo.com"
                  />
                </motion.div>

                {/* Assunto */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-semibold mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Qual é o seu interesse?"
                  />
                </motion.div>

                {/* Mensagem */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                    placeholder="Deixe-nos uma mensagem..."
                  />
                </motion.div>

                {/* Botão de Envio */}
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  variants={fadeInUp}
                >
                  <Send className="h-5 w-5" />
                  Enviar Mensagem
                </motion.button>

                {/* Mensagem de Sucesso */}
                {enviado && (
                  <motion.div
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Obrigado! Sua mensagem foi enviada com sucesso.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Informações de Contacto */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl font-bold font-heading"
                variants={fadeInUp}
              >
                Informações de Contacto
              </motion.h2>

              {/* Email */}
              <motion.div
                className="p-6 bg-card border border-border rounded-lg space-y-3"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <p className="text-muted-foreground">
                  <a
                    href={`mailto:${synares.contacto.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {synares.contacto.email}
                  </a>
                </p>
              </motion.div>

              {/* Telefone */}
              <motion.div
                className="p-6 bg-card border border-border rounded-lg space-y-3"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Telefone</h3>
                </div>
                <p className="text-muted-foreground">
                  <a
                    href={`tel:${synares.contacto.telefone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {synares.contacto.telefone}
                  </a>
                </p>
              </motion.div>

              {/* Localização */}
              <motion.div
                className="p-6 bg-card border border-border rounded-lg space-y-3"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Localização</h3>
                </div>
                <p className="text-muted-foreground">{synares.contacto.endereco}</p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div
                className="p-6 bg-card border border-border rounded-lg space-y-4"
                variants={fadeInUp}
              >
                <h3 className="font-semibold">Contactar</h3>
                <div className="flex gap-4">
                  <a
                    href={`sms:${synares.contacto.telefone}`}
                    className="px-4 py-2 bg-background hover:bg-primary/10 rounded-lg transition-colors inline-flex items-center gap-2"
                    title="Enviar SMS"
                  >
                    <MessageCircle className="h-5 w-5 text-primary" />
                    SMS
                  </a>
                  <a
                    href={`tel:${synares.contacto.telefone}`}
                    className="px-4 py-2 bg-background hover:bg-primary/10 rounded-lg transition-colors inline-flex items-center gap-2"
                    title="Chamada"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    Chamar
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA Parcerias */}
      <Section className="py-20 bg-linear-to-r from-primary/10 to-transparent">
        <Container>
          <motion.div
            className="max-w-3xl space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl font-bold font-heading"
              variants={fadeInUp}
            >
              Interessado em Parcerias?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Estamos sempre à procura de parceiros que compartilham nossa visão de inovação e
              transformação digital. Se você acredita que podemos trabalhar juntos, entre em
              contacto para explorar oportunidades de colaboração.
            </motion.p>
            <motion.button
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all inline-block"
              variants={fadeInUp}
            >
              Explorar Parcerias
            </motion.button>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
