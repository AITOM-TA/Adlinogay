"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/parcours", label: "Parcours" },
  { href: "/expertises", label: "Expertises" },
  { href: "/projets", label: "Projets" },
  { href: "/personnel", label: "Personnel" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile au changement de route
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250,246,241,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212,168,140,0.2)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Monogramme */}
          <Link
            href="/"
            className="font-cormorant text-ink hover:text-brick transition-colors duration-200"
            style={{ fontSize: "22px", letterSpacing: "1px" }}
            aria-label="Accueil — Adeline Auguet"
          >
            A.A
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm transition-colors duration-200 link-animated ${
                  pathname === link.href
                    ? "text-brick"
                    : "text-ink-soft hover:text-ink"
                }`}
                style={{ letterSpacing: "0.3px" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-ink p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Overlay mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center"
          >
            {/* Bouton fermer */}
            <button
              className="absolute top-5 right-6 text-ink p-1"
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>

            {/* Monogramme */}
            <Link
              href="/"
              className="font-cormorant text-ink mb-12"
              style={{ fontSize: "22px" }}
              onClick={() => setMobileOpen(false)}
            >
              A.A
            </Link>

            {/* Liens */}
            <nav className="flex flex-col items-center gap-8" aria-label="Navigation mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`font-cormorant text-4xl transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-brick italic"
                        : "text-ink hover:text-brick"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
