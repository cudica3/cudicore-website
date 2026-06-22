import { synares } from "./content";

export const pageExamples = {
  home: {
    title: "SYNARES",
    description: synares.hero.subtitle,
    hero: synares.hero,
    sections: [
      {
        id: "about",
        title: synares.about.title,
        description: synares.about.sections.visao.content,
      },
      {
        id: "pilares",
        title: "Pilares Estratégicos",
        items: synares.pilares,
      },
      {
        id: "ecossistema",
        title: "Ecossistema SYNARES",
        items: synares.ecossistema,
      },
      {
        id: "tecnologias",
        title: "Tecnologias",
        items: synares.tecnologias,
      },
    ],
  },
  about: {
    title: "Sobre SYNARES",
    description: "Conheça nossa história, missão e visão.",
    sections: [
      {
        heading: synares.about.sections.visao.title,
        content: synares.about.sections.visao.content,
      },
      {
        heading: synares.about.sections.missao.title,
        content: synares.about.sections.missao.content,
      },
      {
        heading: synares.about.sections.valores.title,
        items: synares.about.sections.valores.items,
      },
      {
        heading: synares.about.sections.manifesto.title,
        content: synares.about.sections.manifesto.content,
      },
    ],
  },
  fundador: {
    title: synares.fundador.nome,
    subtitle: synares.fundador.titulo,
    description: synares.fundador.bio,
    data: synares.fundador,
  },
  ecossistema: {
    title: "Ecossistema SYNARES",
    description: "Uma plataforma integrada de soluções tecnológicas.",
    items: synares.ecossistema,
  },
  solucoes: {
    title: "Nossas Soluções",
    description: "Soluções tecnológicas para transformar seu negócio.",
    items: synares.solucoes,
  },
  tecnologias: {
    title: "Tecnologias",
    description: "Stack tecnológico de ponta utilizando as melhores práticas.",
    categories: synares.tecnologias,
  },
  blog: {
    title: "Blog",
    description: "Insights e artigos sobre tecnologia e inovação.",
    categories: synares.blogCategories,
    posts: synares.blogPosts,
  },
  contacto: {
    title: "Contacto",
    description: "Entre em contacto conosco.",
    data: synares.contacto,
  },
};
