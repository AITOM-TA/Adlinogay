"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-5xl mx-auto"
      >
        {label && (
          <p
            className="text-brick font-inter mb-4"
            style={{ fontSize: "11px", letterSpacing: "2px" }}
          >
            {label.toUpperCase()}
          </p>
        )}
        <h1 className="font-cormorant text-6xl md:text-7xl text-ink leading-none mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="font-cormorant text-xl italic text-ink-soft max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
      <div
        className="max-w-5xl mx-auto mt-10"
        style={{ borderBottom: "1px solid rgba(212,168,140,0.3)" }}
      />
    </section>
  );
}
