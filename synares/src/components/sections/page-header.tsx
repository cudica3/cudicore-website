import { Container } from "@/src/components/ui/container";
import { Section } from "@/src/components/ui/section";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/src/lib/animation";

interface PageHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
}

export function PageHeader({ title, description, subtitle }: PageHeaderProps) {
  return (
    <Section className="bg-linear-to-b from-background to-card/30">
      <Container>
        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold font-heading"
            variants={fadeInUp}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-lg text-secondary font-semibold"
              variants={fadeInUp}
            >
              {subtitle}
            </motion.p>
          )}
          {description && (
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl"
              variants={fadeInUp}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
