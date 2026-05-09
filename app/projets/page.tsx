import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";
import Image from "next/image";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Projets phares — Adeline Auguet",
  description:
    "Exemples représentatifs de projets en pharmacie industrielle : inspection FDA, validation de systèmes informatisés, qualification en salle blanche.",
};

const projets = [
  {
    title: "Préparation d'une inspection FDA",
    contexte:
      "Laboratoire pharmaceutique français engagé dans une démarche d'amélioration qualité en amont d'une inspection annoncée.",
    mission:
      "En tant qu'auditrice interne, coordination transverse des équipes pour identifier les écarts, mettre en conformité la documentation et préparer les collaborateurs à l'inspection.",
    resultat: "Inspection conduite avec succès.",
    tags: ["FDA", "Audit interne", "GMP", "Système qualité"],
    company: "Provepharm",
    image: "/photos/projet-fda.jpg",
    imageAlt: "Bureau de travail — préparation inspection FDA",
    reversed: false,
  },
  {
    title: "Création d'une unité de production aseptique",
    contexte:
      "Industriel pharmaceutique en cours d'extension de ses capacités de production, avec la mise en place d'une nouvelle unité de fabrication en environnement aseptique.",
    mission:
      "Pilotage de la qualification complète de l'unité : autoclaves, thermoscelleuses et ligne de remplissage automatique. Rédaction et exécution des protocoles QI/QO/QP, coordination avec les fournisseurs pour les FAT/SAT, et constitution des dossiers de qualification réglementaires.",
    resultat:
      "Unité de production aseptique qualifiée et opérationnelle, équipements conformes aux exigences GMP.",
    tags: ["QI/QO/QP", "FAT/SAT", "Aseptique", "Salle blanche", "GMP"],
    company: "EFOR CVO",
    image: "/photos/projet-aseptique.jpg",
    imageAlt: "Ligne de remplissage automatique en environnement aseptique",
    reversed: true,
  },
  {
    title: "Qualification en environnement aseptique — Virbac",
    contexte:
      "Laboratoire vétérinaire produisant des dispositifs implantables stériles à destination des animaux, nécessitant la mise en conformité de ses équipements et procédés en environnement aseptique.",
    mission:
      "Coordination et validation des holding times propre et sale des instruments utilisés dans la réalisation des préparations — définition des durées maximales admissibles et constitution des dossiers de preuve. Qualification d'une autoclave dédiée à la stérilisation des produits implantables stériles : rédaction et exécution des protocoles QI/QO/QP, tests de pénétration de vapeur et cycles de stérilisation validés.",
    resultat:
      "Holding times validés et autoclave qualifiée — environnement aseptique conforme aux exigences GMP pour la production de stériles implantables.",
    tags: ["Autoclave", "Holding time", "QI/QO/QP", "Aseptique", "Stérile", "GMP"],
    company: "Virbac",
    image: "/photos/projet-virbac.jpg",
    imageAlt: "Locaux Virbac — environnement aseptique",
    reversed: false,
  },
  {
    title: "Mise en place d'un four de stérilisation Dry Heat",
    contexte:
      "Fabricant d'implants en silicone souhaitant intégrer un procédé de stérilisation par chaleur sèche pour sécuriser sa chaîne de production.",
    mission:
      "Pilotage du projet de bout en bout : rédaction du cahier des charges avec le client, sélection et coordination fournisseur, exécution des FAT sur site fabricant puis des SAT à l'installation. Qualification complète de l'équipement — installation (QI), opérationnelle (QO) et de performance (QP) — et constitution des dossiers réglementaires associés.",
    resultat:
      "Four Dry Heat qualifié et opérationnel, procédé de stérilisation validé pour les implants en silicone.",
    tags: ["Dry Heat", "QI/QO/QP", "FAT/SAT", "Stérilisation", "GMP"],
    company: "EFOR CVO",
    image: "/photos/projet-dryheat.jpg",
    imageAlt: "Four de stérilisation par chaleur sèche Dry Heat",
    reversed: true,
  },
];

export default function ProjetsPage() {
  return (
    <>
      <PageHero
        title="Projets phares"
        label="Études de cas"
        subtitle="Quelques exemples représentatifs de mon activité — détails disponibles sur demande pour des raisons de confidentialité industrielle."
      />

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-24">
          {projets.map((projet, i) => (
            <FadeInWhenVisible key={projet.title} delay={0.05}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  projet.reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Texte */}
                <div>
                  <p
                    className="font-inter text-brick mb-3"
                    style={{ fontSize: "11px", letterSpacing: "2px" }}
                  >
                    PROJET {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-cormorant text-4xl text-ink mb-6 leading-tight">
                    {projet.title}
                  </h2>

                  <div className="space-y-4 mb-7">
                    <div>
                      <p
                        className="font-inter text-xs text-ink-muted mb-1"
                        style={{ letterSpacing: "1px" }}
                      >
                        CONTEXTE
                      </p>
                      <p className="font-inter text-sm text-ink-soft leading-relaxed">
                        {projet.contexte}
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-inter text-xs text-ink-muted mb-1"
                        style={{ letterSpacing: "1px" }}
                      >
                        MISSION
                      </p>
                      <p className="font-inter text-sm text-ink-soft leading-relaxed">
                        {projet.mission}
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-inter text-xs text-ink-muted mb-1"
                        style={{ letterSpacing: "1px" }}
                      >
                        RÉSULTAT
                      </p>
                      <p className="font-inter text-sm text-ink leading-relaxed font-medium">
                        {projet.resultat}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projet.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  <p
                    className="font-inter text-xs text-ink-muted italic"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    Détails sur demande — {projet.company}
                  </p>
                </div>

                {/* Visuel */}
                <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-xl overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </div>

              {i < projets.length - 1 && (
                <div
                  className="mt-16"
                  style={{ borderBottom: "1px solid rgba(212,168,140,0.25)" }}
                />
              )}
            </FadeInWhenVisible>
          ))}
        </div>
      </section>
    </>
  );
}
