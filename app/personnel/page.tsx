import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { Footprints, Mountain, Waves, BookOpen, Film } from "lucide-react";
import { travelDestinations } from "@/data/interests";

export const metadata: Metadata = {
  title: "Au-delà du laboratoire — Adeline Auguet",
  description:
    "La personne derrière la pharmacienne : sport, littérature, cinéma et voyages sur cinq continents.",
};

const sports = [
  {
    icon: Footprints,
    title: "Course à pied",
    description: "L'effort comme discipline mentale autant que physique.",
  },
  {
    icon: Mountain,
    title: "Randonnée",
    description: "Prendre de la hauteur, au propre comme au figuré.",
  },
  {
    icon: Waves,
    title: "Plongée sous-marine",
    description: "Le silence sous l'eau, un autre rapport au temps.",
  },
];

const cultures = [
  {
    icon: BookOpen,
    title: "Littérature",
    description:
      "La fiction comme terrain d'empathie et de compréhension du monde.",
  },
  {
    icon: Film,
    title: "Cinéma",
    description:
      "Du cinéma d'auteur aux documentaires, une fenêtre sur d'autres vies.",
  },
];

export default function PersonnelPage() {
  return (
    <>
      <PageHero
        title="Au-delà du laboratoire"
        label="La personne"
        subtitle="« Une carrière scientifique se nourrit de tout ce qui ne l'est pas : l'effort, la curiosité, le grand large. »"
      />

      {/* Le corps en mouvement */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <FadeInWhenVisible>
            <p
              className="font-inter text-brick mb-4"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              LE CORPS EN MOUVEMENT
            </p>
            <h2 className="font-cormorant text-4xl text-ink mb-5">
              Le sport comme équilibre
            </h2>
            <p className="font-inter text-sm text-ink-soft leading-relaxed">
              La course à pied, la randonnée, la plongée sous-marine — trois
              pratiques qui partagent une même logique : accepter l'effort,
              respecter le rythme, et trouver dans la contrainte physique
              un contrepoint à la rigueur intellectuelle du quotidien.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 gap-4">
            {sports.map((sport, i) => {
              const Icon = sport.icon;
              return (
                <FadeInWhenVisible key={sport.title} delay={i * 0.08}>
                  <div
                    className="flex items-start gap-4 bg-cream-warm rounded-xl p-5"
                    style={{ border: "1px solid rgba(212,168,140,0.3)" }}
                  >
                    <div className="w-9 h-9 rounded-full bg-peach flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-terracotta-deep" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl text-ink mb-1">
                        {sport.title}
                      </h3>
                      <p className="font-inter text-sm text-ink-soft">
                        {sport.description}
                      </p>
                    </div>
                  </div>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lire, regarder, penser */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-cream-warm">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-1 gap-4 order-2 md:order-1">
            {cultures.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeInWhenVisible key={item.title} delay={i * 0.08}>
                  <div
                    className="flex items-start gap-4 bg-cream rounded-xl p-5"
                    style={{ border: "1px solid rgba(212,168,140,0.3)" }}
                  >
                    <div className="w-9 h-9 rounded-full bg-peach flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-terracotta-deep" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl text-ink mb-1">
                        {item.title}
                      </h3>
                      <p className="font-inter text-sm text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInWhenVisible>
              );
            })}
          </div>

          <FadeInWhenVisible className="order-1 md:order-2">
            <p
              className="font-inter text-brick mb-4"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              LIRE, REGARDER, PENSER
            </p>
            <h2 className="font-cormorant text-4xl text-ink mb-5">
              La culture comme ouverture
            </h2>
            <p className="font-inter text-sm text-ink-soft leading-relaxed">
              La littérature et le cinéma partagent une même vertu : elles
              obligent à habiter d'autres perspectives. Une qualité précieuse
              dans un métier où comprendre les besoins des utilisateurs est
              aussi important que maîtriser les référentiels.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Voyages */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-cream">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <p
              className="font-inter text-brick mb-3"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              VOYAGES
            </p>
            <h2 className="font-cormorant text-4xl text-ink mb-10">
              Le monde comme terrain
            </h2>
          </FadeInWhenVisible>

          {/* Carte du monde SVG stylisée */}
          <FadeInWhenVisible delay={0.1}>
            <div
              className="w-full rounded-xl p-8 mb-12 overflow-hidden"
              style={{ background: "#F4EDE2", border: "1px solid rgba(212,168,140,0.3)" }}
            >
              <WorldMapSVG />
            </div>
          </FadeInWhenVisible>

          {/* Destinations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
            {travelDestinations.map((dest, i) => (
              <FadeInWhenVisible key={dest.continent} delay={i * 0.07}>
                <div
                  className="bg-cream-warm rounded-xl p-6"
                  style={{ border: "1px solid rgba(212,168,140,0.3)" }}
                >
                  <p
                    className="font-inter text-terracotta-deep mb-1"
                    style={{ fontSize: "11px", letterSpacing: "1.5px" }}
                  >
                    {dest.continent.toUpperCase()}
                  </p>
                  <p className="font-cormorant text-lg text-ink mb-2">
                    {dest.countries.join(", ")}
                  </p>
                  <p className="font-inter text-xs text-ink-soft leading-relaxed italic">
                    {dest.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          {/* Carnet de voyage — placeholders */}
          <FadeInWhenVisible>
            <p
              className="font-inter text-brick mb-6"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              CARNET DE ROUTE
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Asie", "Nouvelle-Zélande", "Afrique", "Europe"].map(
                (label) => (
                  <PhotoPlaceholder
                    key={label}
                    label={label.toLowerCase()}
                    aspectRatio="1/1"
                  />
                )
              )}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Citation finale */}
      <section className="py-28 px-6 md:px-12 bg-cream-warm">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInWhenVisible>
            <blockquote
              className="font-cormorant italic text-ink leading-relaxed"
              style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
            >
              «&thinsp;L'industrie pharmaceutique m'a appris la précision.
              Les voyages, la plongée, la course m'ont appris l'humilité.
              Les deux se complètent.&thinsp;»
            </blockquote>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}

function WorldMapSVG() {
  // Points sur la carte (approximatifs, normalisés sur viewBox 0 0 800 400)
  const destinations = [
    { x: 500, y: 140, label: "Japon / Vietnam" },
    { x: 430, y: 120, label: "Russie" },
    { x: 340, y: 165, label: "Europe" },
    { x: 540, y: 280, label: "Afrique du Sud" },
    { x: 685, y: 270, label: "Nouvelle-Zélande" },
  ];

  return (
    <svg
      viewBox="0 0 800 380"
      className="w-full opacity-90"
      aria-label="Carte des destinations visitées"
    >
      {/* Fond océan */}
      <rect width="800" height="380" fill="none" />

      {/* Masse continentale simplifiée — Europe & Afrique */}
      <path
        d="M290 80 L350 70 L380 80 L390 100 L385 130 L370 150 L360 180 L355 220 L350 260 L340 290 L330 310 L320 320 L310 310 L300 280 L295 250 L290 220 L285 190 L280 160 L275 130 L278 100 Z"
        fill="rgba(184,197,168,0.4)"
        stroke="rgba(138,153,120,0.5)"
        strokeWidth="1"
      />
      {/* Asie */}
      <path
        d="M400 60 L500 50 L560 70 L580 100 L570 130 L540 150 L510 160 L490 145 L460 150 L440 140 L420 120 L400 100 Z"
        fill="rgba(184,197,168,0.4)"
        stroke="rgba(138,153,120,0.5)"
        strokeWidth="1"
      />
      {/* Russie */}
      <path
        d="M350 50 L500 40 L560 60 L560 70 L500 50 L400 60 L380 70 L360 70 Z"
        fill="rgba(184,197,168,0.35)"
        stroke="rgba(138,153,120,0.4)"
        strokeWidth="1"
      />
      {/* Amériques */}
      <path
        d="M160 80 L210 70 L220 90 L230 130 L220 170 L210 200 L200 240 L190 270 L180 300 L170 280 L160 250 L150 210 L145 170 L148 130 L155 100 Z"
        fill="rgba(184,197,168,0.3)"
        stroke="rgba(138,153,120,0.4)"
        strokeWidth="1"
      />
      {/* Océanie */}
      <path
        d="M640 240 L690 235 L710 250 L710 270 L700 285 L680 290 L660 280 L645 265 Z"
        fill="rgba(184,197,168,0.4)"
        stroke="rgba(138,153,120,0.5)"
        strokeWidth="1"
      />
      {/* Afrique du Sud highlight */}
      <path
        d="M320 310 L340 295 L360 300 L360 320 L345 335 L330 335 Z"
        fill="rgba(212,168,140,0.4)"
        stroke="rgba(184,132,95,0.5)"
        strokeWidth="1"
      />

      {/* Points destinations */}
      {destinations.map((dest) => (
        <g key={dest.label}>
          <circle
            cx={dest.x}
            cy={dest.y}
            r="6"
            fill="#B8845F"
            opacity="0.85"
          />
          <circle
            cx={dest.x}
            cy={dest.y}
            r="10"
            fill="none"
            stroke="#B8845F"
            strokeWidth="1.5"
            opacity="0.4"
          />
        </g>
      ))}

      {/* Légende */}
      <g transform="translate(20, 340)">
        <circle cx="6" cy="6" r="5" fill="#B8845F" opacity="0.85" />
        <text
          x="16"
          y="10"
          fill="#4A4A42"
          fontSize="10"
          fontFamily="var(--font-inter), sans-serif"
        >
          Destinations visitées
        </text>
      </g>
    </svg>
  );
}
