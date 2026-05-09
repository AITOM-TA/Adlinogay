import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import TimelineItem from "@/components/parcours/TimelineItem";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";
import { experiences } from "@/data/experiences";
import { formations } from "@/data/formations";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Parcours — Adeline Auguet",
  description:
    "Timeline détaillée des expériences professionnelles et formations d'Adeline Auguet, pharmacienne industrielle.",
};

export default function ParcoursPage() {
  return (
    <>
      <PageHero
        title="Parcours"
        label="Expériences & formations"
        subtitle="Six années d'engagement dans la pharmacie industrielle, entre terrain, projets et expertise réglementaire."
      />

      {/* Timeline */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Ligne verticale desktop (fond) */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{
                background: "rgba(212,168,140,0.2)",
                transform: "translateX(-50%)",
              }}
            />

            {experiences.map((exp, i) => (
              <TimelineItem key={i} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Formations */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-cream-warm">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-full bg-peach flex items-center justify-center">
                <GraduationCap size={16} className="text-terracotta-deep" />
              </div>
              <p
                className="font-inter text-brick"
                style={{ fontSize: "11px", letterSpacing: "2px" }}
              >
                FORMATIONS
              </p>
            </div>
            <h2 className="font-cormorant text-4xl text-ink mb-10">
              Parcours académique
            </h2>
          </FadeInWhenVisible>

          <div className="space-y-4">
            {formations.map((formation, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.08}>
                <div
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-cream rounded-xl p-6"
                  style={{ border: "1px solid rgba(212,168,140,0.3)" }}
                >
                  <span
                    className="font-cormorant text-3xl text-terracotta font-light flex-shrink-0"
                    style={{ minWidth: "80px" }}
                  >
                    {formation.year}
                  </span>
                  <div>
                    <p className="font-cormorant text-xl text-ink">
                      {formation.title}
                    </p>
                    <p className="font-inter text-sm text-ink-muted italic mt-1">
                      {formation.institution}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
