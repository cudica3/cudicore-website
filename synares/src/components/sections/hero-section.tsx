"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/src/lib/animation";

interface HeroSectionProps {
  title: string;
  description?: string;
  subtitle?: string;
  children?: React.ReactNode;
  imagePosition?: "left" | "right";
}

export function HeroSection({
  title,
  description,
  subtitle,
  children,
  imagePosition = "right",
}: HeroSectionProps) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <motion.div
        className="space-y-4"
        variants={imagePosition === "left" ? fadeInRight : fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl font-heading">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-secondary font-semibold">{subtitle}</p>
        )}
        {description && (
          <p className="text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </motion.div>

      {children && (
        <motion.div
          variants={imagePosition === "left" ? fadeInLeft : fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
