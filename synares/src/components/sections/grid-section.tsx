"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/src/lib/animation";

interface GridSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function GridSection({
  title,
  description,
  children,
  columns = 3,
}: GridSectionProps) {
  const colsMap = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className="space-y-12">
      <motion.div
        className="space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl font-heading">
          {title}
        </h2>
        {description && (
          <p className="mx-auto max-w-2xl text-muted-foreground">{description}</p>
        )}
      </motion.div>

      <motion.div
        className={`grid gap-6 md:gap-8 grid-cols-1 ${colsMap[columns]}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
