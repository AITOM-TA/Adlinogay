"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-6 md:px-12 lg:px-24 bg-cream">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
        {/* Contenu texte */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brick font-inter mb-6"
            style={{ fontSize: "11px", letterSpacing: "2px" }}
          >
            DOCTEUR EN PHARMACIE · PHARMACIENNE INDUSTRIELLE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cormorant text-ink leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 76px)" }}
          >
            Entre rigueur scientifique
            <br />
            et{" "}
            <em className="italic text-brick">curiosité humaine.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-inter text-ink-soft leading-relaxed mb-10 max-w-md"
            style={{ fontSize: "16px" }}
          >
            Pharmacienne industrielle passionnée par la validation et la
            conformité réglementaire. Je mets mon expertise projet et ma
            rigueur scientifique au service d'environnements innovants et
            exigeants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary" href="/parcours">
              Découvrir mon parcours
            </Button>
            <Button variant="outline" href="/contact">
              Me contacter
            </Button>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
            <Image
              src="/photos/portrait.jpg"
              alt="Adeline Auguet — Pharmacienne Industrielle"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
