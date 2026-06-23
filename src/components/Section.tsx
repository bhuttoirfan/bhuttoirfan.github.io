import { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      {eyebrow && <p className="mb-2 font-mono text-sm text-accent-soft">{eyebrow}</p>}
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
