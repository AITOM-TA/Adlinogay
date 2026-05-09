import Link from "next/link";
import { FlaskConical, ClipboardCheck, Users, ArrowRight } from "lucide-react";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";

const expertises = [
  {
    icon: FlaskConical,
    title: "Validation & Qualification",
    description:
      "Stratégie GMP, protocoles QI/QO/QP, qualification d'équipements et validation de systèmes informatisés selon GAMP 5.",
  },
  {
    icon: ClipboardCheck,
    title: "Gestion de projet",
    description:
      "Coordination pluridisciplinaire, de l'expression du besoin à la mise en service — cahier des charges, livraison, formation.",
  },
  {
    icon: Users,
    title: "Conformité réglementaire",
    description:
      "Inspections FDA, 21 CFR Part 11, Annexe 11. Maintien de l'état validé et amélioration continue du système qualité.",
  },
];

export default function ExpertiseTeaser() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <p
            className="font-inter text-brick mb-3"
            style={{ fontSize: "11px", letterSpacing: "2px" }}
          >
            CE QUE JE FAIS
          </p>
          <h2 className="font-cormorant text-5xl text-ink mb-14">
            Domaines d'expertise
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertises.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeInWhenVisible key={item.title} delay={i * 0.1}>
                <div
                  className="bg-cream-warm rounded-xl p-7 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] group"
                  style={{
                    border: "1px solid rgba(212,168,140,0.3)",
                  }}
                >
                  <div className="mb-5">
                    <div className="w-10 h-10 rounded-full bg-peach flex items-center justify-center mb-5">
                      <Icon size={18} className="text-terracotta-deep" />
                    </div>
                    <h3 className="font-cormorant text-2xl text-ink mb-3">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-ink-soft leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href="/expertises"
                    className="flex items-center gap-1 font-inter text-sm text-brick mt-auto hover:gap-2 transition-all duration-200"
                  >
                    En savoir plus
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
