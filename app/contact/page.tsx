import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Adeline Auguet",
  description:
    "Contacter Adeline Auguet, pharmacienne industrielle. Ouverte aux opportunités en pharmacie industrielle, validation et conformité réglementaire.",
};

function LinkedinIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type CoordItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string | null;
};

const coordonnees: CoordItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "adelineauguet@orange.fr",
    href: "mailto:adelineauguet@orange.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 68 95 28 04",
    href: "tel:+33668952804",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Ceyreste, France",
    href: null,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Profil LinkedIn",
    href: "#", // À compléter
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Échangeons"
        label="Contact"
        subtitle="Ouverte aux opportunités en pharmacie industrielle, validation et conformité réglementaire."
      />

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Coordonnées */}
          <FadeInWhenVisible>
            <p
              className="font-inter text-brick mb-8"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              COORDONNÉES
            </p>

            <div className="space-y-6 mb-10">
              {coordonnees.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-peach flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-terracotta-deep" />
                    </div>
                    <div>
                      <p
                        className="font-inter text-ink-muted mb-0.5"
                        style={{ fontSize: "11px", letterSpacing: "1px" }}
                      >
                        {item.label.toUpperCase()}
                      </p>
                      <p className="font-inter text-sm text-ink-soft">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={item.label}>{content}</div>;
              })}
            </div>

            <div
              className="bg-cream-warm rounded-xl p-6"
              style={{ border: "1px solid rgba(212,168,140,0.3)" }}
            >
              <p className="font-cormorant italic text-ink-soft text-lg leading-relaxed">
                «&thinsp;Ouverte aux opportunités en pharmacie industrielle,
                validation et conformité réglementaire — en CDI ou en
                mission.&thinsp;»
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Formulaire */}
          <FadeInWhenVisible delay={0.1}>
            <p
              className="font-inter text-brick mb-8"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              FORMULAIRE
            </p>
            <ContactForm />
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}
