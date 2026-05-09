import Image from "next/image";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";

export default function DoctoratSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-peach">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <FadeInWhenVisible>
            <div className="relative aspect-[3/4] w-full max-w-xs mx-auto lg:mx-0 rounded-xl overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(44,58,46,0.10)" }}
            >
              <Image
                src="/photos/doctorat.jpg"
                alt="Adeline Auguet — Remise des diplômes, Faculté de Pharmacie d'Aix-Marseille"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </FadeInWhenVisible>

          {/* Texte */}
          <FadeInWhenVisible delay={0.15}>
            <p
              className="font-inter text-brick mb-6"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              DIPLÔME D'ÉTAT
            </p>
            <h2
              className="font-cormorant text-ink leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 54px)" }}
            >
              Docteur en Pharmacie Industrielle
            </h2>
            <p
              className="font-inter text-ink-soft leading-relaxed mb-5"
              style={{ fontSize: "16px" }}
            >
              Formée à la Faculté de Pharmacie d'Aix-Marseille, mon doctorat est
              le socle sur lequel repose toute mon approche : une compréhension
              scientifique rigoureuse, mise au service d'environnements
              industriels exigeants.
            </p>
            <p
              className="font-inter text-ink-soft leading-relaxed"
              style={{ fontSize: "16px" }}
            >
              Ce titre n'est pas qu'un diplôme — c'est une façon d'appréhender
              chaque problème avec méthode, chaque projet avec exigence.
            </p>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
