import Button from "@/components/ui/Button";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";

const jalons = [
  { year: "2013", label: "Début des études de Pharmacie", city: "Marseille" },
  { year: "2018", label: "Stage international chez MSD", city: "Nouvelle-Zélande" },
  { year: "2019", label: "Consultante Chef de Projet chez EFOR CVO", city: "Aix-en-Provence" },
  { year: "2023", label: "Coordinatrice Validation chez Provepharm", city: "Marseille" },
];

export default function MiniTimeline() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream-warm">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <p
            className="font-inter text-brick mb-3"
            style={{ fontSize: "11px", letterSpacing: "2px" }}
          >
            PARCOURS EN BREF
          </p>
          <h2 className="font-cormorant text-5xl text-ink mb-14">
            Une trajectoire construite pas à pas
          </h2>
        </FadeInWhenVisible>

        {/* Timeline horizontale */}
        <FadeInWhenVisible delay={0.1}>
          <div className="relative mb-14">
            {/* Ligne */}
            <div
              className="absolute top-5 left-0 right-0 h-px hidden md:block"
              style={{ background: "rgba(212,168,140,0.5)" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {jalons.map((jalon, i) => (
                <div key={i} className="relative flex flex-col items-start md:items-center">
                  {/* Point */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3 relative z-10"
                    style={{ background: "#B8C5A8", border: "2px solid #FAF6F1" }}
                  >
                    <span className="font-inter text-ink text-xs font-medium">
                      {jalon.year}
                    </span>
                  </div>
                  <p className="font-inter text-sm text-ink-soft text-left md:text-center leading-snug">
                    {jalon.label}
                  </p>
                  <p
                    className="font-inter text-ink-muted text-left md:text-center mt-1"
                    style={{ fontSize: "11px", letterSpacing: "0.5px" }}
                  >
                    {jalon.city}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" href="/parcours">
            Voir le parcours complet
          </Button>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
