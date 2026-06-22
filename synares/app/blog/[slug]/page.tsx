import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { blogPosts, getBlogPost, getBlogPostsByCategory } from "@/src/data/blog-posts";
import { siteConfig } from "@/src/data/site";
import { Calendar, User, Clock, ArrowLeft, Tag } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <main className="pt-16">
      {/* Header com imagem */}
      <Section className="py-8">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Blog
          </Link>
        </Container>
      </Section>

      <Section className="pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Cabeçalho do Artigo */}
            <div className="space-y-6 mb-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime} de leitura
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("pt-PT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>

            {/* Imagem de Capa */}
            <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            </div>

            {/* Conteúdo do Artigo */}
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
              {post.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-muted-foreground leading-relaxed mb-6 text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Separador */}
            <div className="border-t border-border my-12" />

            {/* Sobre o Autor */}
            <div className="p-8 bg-card border border-border rounded-lg">
              <div className="flex items-start gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/Foto-fundador.png"
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading">{post.author}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Criador do Synares e defensor da inovação tecnológica africana.
                    Escreve sobre desenvolvimento de software, inteligência artificial
                    e transformação digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Artigos Relacionados */}
      {relatedPosts.length > 0 && (
        <Section className="py-20 bg-card/50">
          <Container>
            <h2 className="text-3xl font-bold font-heading mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        <Tag className="h-3 w-3" />
                        {relatedPost.category}
                      </span>
                      <span className="text-muted-foreground">
                        <Clock className="h-3 w-3 inline-block mr-1" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </main>
  );
}