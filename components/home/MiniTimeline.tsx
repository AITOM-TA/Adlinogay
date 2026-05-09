"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { experiences } from "@/data/experiences";
import type { Experience } from "@/data/experiences";

export default function MiniTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxTranslateRef = useRef(2200);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useMotionValue(0);

  // Calcule la distance horizontale à couvrir après le montage
  useEffect(() => {
    const compute = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      maxTranslateRef.current = Math.max(0, trackWidth - viewportWidth + 64);
      // Ajuste la hauteur du container pour que le scroll soit fluide
      if (containerRef.current) {
        containerRef.current.style.height = `calc(100vh + ${maxTranslateRef.current}px)`;
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    x.set(-latest * maxTranslateRef.current);
  });

  // Progression pour la ligne de timeline
  const lineScaleX = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <>
      {/* ── Version desktop : scroll horizontal ── */}
      <section
        ref={containerRef}
        className="relative bg-cream-warm hidden md:block"
        style={{ height: `calc(100vh + 2200px)` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* En-tête */}
          <div className="px-16 lg:px-24 pt-16 pb-10 flex items-end justify-between">
            <div>
              <p
                className="font-inter text-brick mb-3"
                style={{ fontSize: "11px", letterSpacing: "2px" }}
              >
                PARCOURS EN BREF
              </p>
              <h2 className="font-cormorant text-5xl text-ink">
                Une trajectoire construite pas à pas
              </h2>
            </div>
            <Button variant="outline" href="/parcours">
              Voir le parcours complet
            </Button>
          </div>

          {/* Piste horizontale */}
          <div className="relative">
            {/* Ligne de timeline animée */}
            <div className="absolute top-[28px] left-16 lg:left-24 right-0 h-px overflow-hidden">
              <motion.div
                className="h-full origin-left"
                style={{
                  scaleX: lineScaleX,
                  background:
                    "linear-gradient(to right, rgba(212,168,140,0.6), rgba(184,132,95,0.4))",
                }}
              />
            </div>

            {/* Cartes scrollantes */}
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex items-start pl-16 lg:pl-24 pr-32 will-change-transform"
            >
              {experiences.map((exp, i) => (
                <HorizontalCard
                  key={i}
                  experience={exp}
                  index={i}
                  total={experiences.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </motion.div>
          </div>

          {/* Indicateur de scroll discret */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <div className="w-px h-8 bg-terracotta/40 mx-auto" />
            </motion.div>
            <p
              className="font-inter text-ink-muted"
              style={{ fontSize: "10px", letterSpacing: "1.5px" }}
            >
              DÉFILER
            </p>
          </div>
        </div>
      </section>

      {/* ── Version mobile : liste verticale ── */}
      <section className="md:hidden bg-cream-warm py-20 px-6">
        <p
          className="font-inter text-brick mb-3"
          style={{ fontSize: "11px", letterSpacing: "2px" }}
        >
          PARCOURS EN BREF
        </p>
        <h2 className="font-cormorant text-4xl text-ink mb-10">
          Une trajectoire construite pas à pas
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-3 h-3 rounded-full mt-1"
                  style={{ background: "#B8C5A8", border: "2px solid #F4EDE2" }}
                />
                {i < experiences.length - 1 && (
                  <div
                    className="w-px flex-1 my-1"
                    style={{ background: "rgba(212,168,140,0.4)" }}
                  />
                )}
              </div>
              <div className="pb-7">
                <p
                  className="font-inter text-ink-muted mb-0.5"
                  style={{ fontSize: "10px", letterSpacing: "0.8px" }}
                >
                  {exp.period}
                </p>
                <p className="font-cormorant text-xl text-ink leading-tight">
                  {exp.title}
                </p>
                <p className="font-inter text-sm text-terracotta-deep">
                  {exp.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="outline" href="/parcours">
            Voir le parcours complet
          </Button>
        </div>
      </section>
    </>
  );
}

function HorizontalCard({
  experience,
  index,
  total,
  scrollYProgress,
}: {
  experience: Experience;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Chaque carte apparaît en fondu décalé selon sa position
  const cardStart = (index / total) * 0.6;
  const cardEnd = cardStart + 0.2;
  const opacity = useTransform(scrollYProgress, [cardStart, cardEnd], [0.3, 1]);
  const y = useTransform(scrollYProgress, [cardStart, cardEnd], [20, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="flex-shrink-0 w-[320px] lg:w-[360px] mr-6 lg:mr-8"
    >
      {/* Point de timeline */}
      <div className="relative flex items-center h-14">
        <div
          className="w-4 h-4 rounded-full z-10 flex-shrink-0"
          style={{
            background: "#B8C5A8",
            border: "3px solid #F4EDE2",
            boxShadow: "0 0 0 4px rgba(184,197,168,0.25)",
          }}
        />
        <div className="ml-3">
          <p
            className="font-inter text-ink-muted"
            style={{ fontSize: "10px", letterSpacing: "1px" }}
          >
            {experience.period}
          </p>
          <div className="flex items-center gap-1">
            <MapPin size={9} className="text-terracotta" />
            <span className="font-inter text-terracotta" style={{ fontSize: "10px" }}>
              {experience.location}
            </span>
            {experience.international && (
              <Globe size={9} className="text-sage-deep ml-0.5" />
            )}
          </div>
        </div>
      </div>

      {/* Carte */}
      <div
        className="bg-cream rounded-xl p-5 lg:p-6 transition-all duration-300 hover:scale-[1.02]"
        style={{ border: "1px solid rgba(212,168,140,0.35)" }}
      >
        <h3 className="font-cormorant text-xl lg:text-2xl text-ink mb-1 leading-tight">
          {experience.title}
        </h3>
        <p className="font-inter text-sm text-terracotta-deep font-medium mb-4">
          {experience.company}
        </p>
        <p className="font-inter text-xs text-ink-soft leading-relaxed line-clamp-3 mb-4">
          {experience.bullets[0]}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {experience.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
