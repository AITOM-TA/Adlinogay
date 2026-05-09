import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";

const stats = [
  { value: "6+", label: "années d'expérience" },
  { value: "2", label: "diplômes" },
  { value: "7+", label: "environnements différents" },
];

export default function QuickStats() {
  return (
    <section className="bg-cream-warm py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte bio */}
          <FadeInWhenVisible>
            <p
              className="font-inter text-sm text-brick mb-4"
              style={{ letterSpacing: "2px" }}
            >
              EN QUELQUES MOTS
            </p>
            <p className="font-cormorant text-2xl text-ink leading-relaxed">
              Pharmacienne industrielle formée à Aix-Marseille, j'ai construit
              mon expertise entre laboratoires, salles blanches et projets
              d'envergure. Rigoureuse dans le travail, curieuse en dehors — je
              crois que les deux ne font qu'un.
            </p>
          </FadeInWhenVisible>

          {/* Chiffres clés */}
          <FadeInWhenVisible delay={0.15}>
            <div className="flex flex-row justify-around md:justify-end md:gap-12">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <p
                    className="font-cormorant text-ink leading-none mb-1"
                    style={{ fontSize: "56px" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-inter text-ink-muted"
                    style={{ fontSize: "12px", letterSpacing: "0.5px" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
