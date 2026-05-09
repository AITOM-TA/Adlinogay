import Link from "next/link";
import { Mail, Phone } from "lucide-react";

function LinkedinIcon({ size = 14 }: { size?: number }) {
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
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="bg-cream-warm py-12 px-6 md:px-12"
      style={{ borderTop: "1px solid rgba(212,168,140,0.3)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Monogramme */}
        <Link
          href="/"
          className="font-cormorant text-ink text-xl hover:text-brick transition-colors"
          style={{ letterSpacing: "1px" }}
        >
          Adeline Auguet
        </Link>

        {/* Coordonnées */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a
            href="mailto:adelineauguet@orange.fr"
            className="flex items-center gap-2 text-ink-soft text-sm hover:text-brick transition-colors link-animated font-inter"
          >
            <Mail size={14} />
            adelineauguet@orange.fr
          </a>
          <a
            href="tel:+33668952804"
            className="flex items-center gap-2 text-ink-soft text-sm hover:text-brick transition-colors link-animated font-inter"
          >
            <Phone size={14} />
            06 68 95 28 04
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-ink-soft text-sm hover:text-brick transition-colors link-animated font-inter"
            aria-label="LinkedIn d'Adeline Auguet"
          >
            <LinkedinIcon size={14} />
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p
          className="text-ink-muted font-inter"
          style={{ fontSize: "11px", letterSpacing: "0.5px" }}
        >
          © {new Date().getFullYear()} Adeline Auguet
        </p>
      </div>
    </footer>
  );
}
