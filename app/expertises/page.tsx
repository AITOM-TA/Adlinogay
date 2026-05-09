import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ExpertiseCard from "@/components/expertises/ExpertiseCard";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";
import { expertises, tools, softSkills } from "@/data/expertises";

export const metadata: Metadata = {
  title: "Expertises — Adeline Auguet",
  description:
    "Domaines d'expertise d'Adeline Auguet : validation de systèmes informatisés, qualification d'équipements, gestion de projets pharmaceutiques et conformité réglementaire.",
};

export default function ExpertisesPage() {
  return (
    <>
      <PageHero
        title="Expertises"
        label="Domaines de compétence"
        subtitle="Chaque expertise est le fruit d'années de terrain, de projets complexes et d'un engagement constant pour la qualité."
      />

      {/* Grille expertises */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertises.map((expertise, i) => (
              <ExpertiseCard
                key={expertise.title}
                expertise={expertise}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Outils & environnements */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-cream-warm">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <p
              className="font-inter text-brick mb-3"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              OUTILS & ENVIRONNEMENTS
            </p>
            <h2 className="font-cormorant text-4xl text-ink mb-10">
              Environnements maîtrisés
            </h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full font-inter text-sm text-ink-soft bg-cream"
                  style={{ border: "1px solid rgba(212,168,140,0.4)" }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Soft skills */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-cream">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <p
              className="font-inter text-brick mb-3"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              SOFT SKILLS
            </p>
            <h2 className="font-cormorant text-4xl text-ink mb-10">
              Au-delà des référentiels
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {softSkills.map((skill, i) => (
              <FadeInWhenVisible key={skill.title} delay={i * 0.08}>
                <div
                  className="bg-cream-warm rounded-xl p-6 flex flex-col gap-2"
                  style={{ border: "1px solid rgba(212,168,140,0.3)" }}
                >
                  <h3 className="font-cormorant text-xl text-ink">
                    {skill.title}
                  </h3>
                  <p className="font-inter text-sm text-ink-soft leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
