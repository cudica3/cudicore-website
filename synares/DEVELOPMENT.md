# SYNARES — Documentação de Desenvolvimento

## 📋 Visão Geral

Este é o projeto da estrutura base do website institucional SYNARES, desenvolvido com Next.js 16, TypeScript, TailwindCSS, Shadcn/UI e Framer Motion.

## 🎨 Identidade Visual

### Paleta de Cores
- **Background**: `#0B0B0B` (rgb(11, 11, 11))
- **Foreground**: `#F5F5F5` (rgb(245, 245, 245))
- **Primary**: `#2F80ED` (rgb(47, 128, 237))
- **Secondary**: `#56CCF2` (rgb(86, 204, 242))
- **Muted**: `#1A1A1A` (rgb(26, 26, 26))

### Tipografia

#### Institucionais (Headings)
- **Playfair Display**: Títulos e headings
- **Merriweather**: Subtítulos e corpo institucional

#### Tecnológicas (Body)
- **Inter**: Corpo de texto padrão
- **Manrope**: Texto técnico

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Barra de navegação responsiva
│   │   └── Footer.tsx         # Rodapé com links rápidos
│   ├── sections/
│   │   ├── solution-card.tsx  # Card para soluções
│   │   ├── hero-section.tsx   # Seção hero reutilizável
│   │   └── grid-section.tsx   # Seção grid reutilizável
│   └── ui/
│       ├── container.tsx      # Container responsivo
│       ├── section.tsx        # Componente Section base
│       └── ...
├── data/
│   ├── navigation.ts          # Dados de navegação
│   └── site.ts               # Configurações do site
├── hooks/
│   └── useScrollReveal.ts    # Hook para revelar elementos ao scroll
├── lib/
│   ├── animation.ts          # Variantes de animação Framer Motion
│   └── utils.ts              # Funções utilitárias
├── styles/
│   └── ...
└── types/
    └── index.ts              # Tipos TypeScript globais

app/
├── layout.tsx                # Layout raiz
├── globals.css               # Estilos globais
├── page.tsx                  # Home page
├── about/
│   ├── layout.tsx
│   ├── page.tsx
│   └── fundador/page.tsx
├── ecossistema/page.tsx
├── solucoes/page.tsx
├── tecnologias/page.tsx
├── blog/page.tsx
└── contacto/page.tsx
```

## 🎬 Animações Disponíveis

### Variantes Framer Motion (`src/lib/animation.ts`)

```typescript
import { fadeInUp, fadeInLeft, slideUp, staggerContainer } from "@/src/lib/animation";
```

#### Variantes Disponíveis
- **fadeIn**: Fade simples
- **fadeInUp**: Fade com slide para cima
- **fadeInDown**: Fade com slide para baixo
- **fadeInLeft**: Fade com slide para esquerda
- **fadeInRight**: Fade com slide para direita
- **slideUp**: Slide para cima
- **scrollReveal**: Revelação ao scroll
- **scaleIn**: Scale de 0.9 a 1
- **staggerContainer**: Contenedor com stagger de filhos

### Hook useScrollReveal

```typescript
import { useScrollReveal } from "@/src/hooks/useScrollReveal";

export function Component() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {isVisible && <AnimatedContent />}
    </div>
  );
}
```

## 🧩 Componentes Reutilizáveis

### Container
Contenedor responsivo com padding e max-width.

```tsx
<Container as="section" className="custom-class">
  {children}
</Container>
```

### Section
Seção com padding vertical e contenedor.

```tsx
<Section className="bg-gradient-to-b from-background to-card/30">
  <Container>
    {children}
  </Container>
</Section>
```

### SolutionCard
Card para exibir soluções com ícone.

```tsx
import { SolutionCard } from "@/src/components/sections/solution-card";
import { Zap } from "lucide-react";

<SolutionCard
  title="Solução"
  description="Descrição da solução"
  icon={<Zap />}
  delay={0}
/>
```

### GridSection
Seção com grid de items.

```tsx
import { GridSection } from "@/src/components/sections/grid-section";

<GridSection
  title="Título"
  description="Descrição"
  columns={3}
>
  {children}
</GridSection>
```

### HeroSection
Seção hero com layout grid.

```tsx
import { HeroSection } from "@/src/components/sections/hero-section";

<HeroSection
  title="Título"
  subtitle="Subtítulo"
  description="Descrição"
  imagePosition="right"
>
  <Image />
</HeroSection>
```

## 🚀 Exemplo de Página

```tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { GridSection } from "@/src/components/sections/grid-section";
import { SolutionCard } from "@/src/components/sections/solution-card";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";
import { Zap, Lightbulb, Rocket } from "lucide-react";

export default function SolucõesPage() {
  const solutions = [
    {
      title: "Solução 1",
      description: "Descrição da solução 1",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Solução 2",
      description: "Descrição da solução 2",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Solução 3",
      description: "Descrição da solução 3",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <main className="pt-16">
      <Section className="bg-gradient-to-b from-background to-card/30">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold font-heading">
            Soluções
          </h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <GridSection
            title="Nossas Soluções"
            description="Descubra como nossas soluções podem impulsionar seu negócio"
            columns={3}
          >
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.title}
                {...solution}
                delay={index * 0.1}
              />
            ))}
          </GridSection>
        </Container>
      </Section>
    </main>
  );
}
```

## 📱 Responsividade

O projeto segue **Mobile First** com breakpoints Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Acessibilidade

- Todos os componentes seguem padrões WCAG 2.1
- Aria labels apropriados em componentes interativos
- Navegação por teclado em todos os menus
- Contraste de cores adequado

## 🔧 Scripts

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm run start

# Linting
npm run lint
```

## 📦 Dependências Principais

- **Next.js 16**: Framework React
- **React 19**: Biblioteca UI
- **TypeScript**: Tipagem estática
- **TailwindCSS 4**: Utility-first CSS
- **Framer Motion 12**: Animações
- **Shadcn/UI**: Componentes UI
- **Lucide React**: Ícones
- **Radix UI**: Componentes acessíveis

## 🎯 Próximas Fases

- [ ] Conteúdo institucional
- [ ] Sistema de blog
- [ ] Formulário de contacto
- [ ] SEO otimizado
- [ ] Analytics
- [ ] CMS integrado

---

**Projeto SYNARES © 2024**
