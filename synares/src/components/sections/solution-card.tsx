"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/src/lib/animation";

interface SolutionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function SolutionCard({
  title,
  description,
  icon,
  delay = 0,
}: SolutionCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-border bg-card/50 p-6 transition-all hover:border-primary hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
      variants={fadeInUp}
      custom={delay}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
