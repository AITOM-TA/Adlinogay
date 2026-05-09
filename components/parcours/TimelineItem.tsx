"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Globe } from "lucide-react";
import Tag from "@/components/ui/Tag";
import type { Experience } from "@/data/experiences";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-0 md:gap-6 mb-12"
    >
      {/* Colonne gauche (desktop) */}
      <div className={`hidden md:flex flex-col ${isEven ? "items-end text-right" : ""}`}>
        {isEven ? (
          <div className="pt-1">
            <p
              className="font-inter text-ink-muted mb-1"
              style={{ fontSize: "12px", letterSpacing: "1px" }}
            >
              {experience.period}
            </p>
            <div className="flex items-center justify-end gap-1">
              <MapPin size={11} className="text-terracotta" />
              <span className="font-inter text-xs text-terracotta">
                {experience.location}
              </span>
              {experience.international && (
                <Globe size={11} className="text-sage-deep ml-1" />
              )}
            </div>
          </div>
        ) : (
          <div
            className="bg-cream-warm rounded-xl p-6 w-full"
            style={{ border: "1px solid rgba(212,168,140,0.3)" }}
          >
            <TimelineContent experience={experience} />
          </div>
        )}
      </div>

      {/* Ligne et point central */}
      <div className="hidden md:flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
          style={{
            background: "#B8C5A8",
            border: "2px solid #FAF6F1",
            boxShadow: "0 0 0 3px rgba(184,197,168,0.3)",
          }}
        />
        <div
          className="w-px flex-1 mt-1"
          style={{ background: "rgba(212,168,140,0.4)" }}
        />
      </div>

      {/* Colonne droite (desktop) */}
      <div className={`hidden md:flex flex-col ${!isEven ? "items-start text-left" : ""}`}>
        {!isEven ? (
          <div className="pt-1">
            <p
              className="font-inter text-ink-muted mb-1"
              style={{ fontSize: "12px", letterSpacing: "1px" }}
            >
              {experience.period}
            </p>
            <div className="flex items-center gap-1">
              <MapPin size={11} className="text-terracotta" />
              <span className="font-inter text-xs text-terracotta">
                {experience.location}
              </span>
              {experience.international && (
                <Globe size={11} className="text-sage-deep ml-1" />
              )}
            </div>
          </div>
        ) : (
          <div
            className="bg-cream-warm rounded-xl p-6 w-full"
            style={{ border: "1px solid rgba(212,168,140,0.3)" }}
          >
            <TimelineContent experience={experience} />
          </div>
        )}
      </div>

      {/* Version mobile : toujours en ligne */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div
            className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
            style={{
              background: "#B8C5A8",
              border: "2px solid #FAF6F1",
              boxShadow: "0 0 0 3px rgba(184,197,168,0.3)",
            }}
          />
          <div
            className="w-px flex-1 mt-1"
            style={{ background: "rgba(212,168,140,0.4)" }}
          />
        </div>
        <div className="flex-1 pb-8">
          <p
            className="font-inter text-ink-muted mb-1"
            style={{ fontSize: "11px", letterSpacing: "1px" }}
          >
            {experience.period}
          </p>
          <div className="flex items-center gap-1 mb-3">
            <MapPin size={10} className="text-terracotta" />
            <span className="font-inter text-xs text-terracotta">
              {experience.location}
            </span>
            {experience.international && (
              <Globe size={10} className="text-sage-deep ml-1" />
            )}
          </div>
          <div
            className="bg-cream-warm rounded-xl p-5"
            style={{ border: "1px solid rgba(212,168,140,0.3)" }}
          >
            <TimelineContent experience={experience} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineContent({ experience }: { experience: Experience }) {
  return (
    <>
      <h3 className="font-cormorant text-2xl text-ink mb-1">
        {experience.title}
      </h3>
      <p className="font-inter font-medium text-terracotta-deep text-sm mb-4">
        {experience.company}
      </p>
      <ul className="space-y-2 mb-5">
        {experience.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 font-inter text-sm text-ink-soft leading-relaxed">
            <span className="mt-2 w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </>
  );
}
