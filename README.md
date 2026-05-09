# Site d'Adeline Auguet — Pharmacienne Industrielle

Site portfolio multi-pages, conçu comme un CV étendu et narratif.

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** avec palette personnalisée
- **Framer Motion** pour les animations au scroll
- **Lucide React** pour les icônes

## Lancer en développement

```bash
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm run start
```

## Déployer sur Vercel

1. Pousser le dépôt sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Vercel détecte automatiquement Next.js — cliquer "Deploy"

Aucune variable d'environnement requise pour le moment.

## Structure du projet

```
app/
├── page.tsx           → Accueil
├── parcours/          → Timeline des expériences
├── expertises/        → Domaines de compétence
├── projets/           → Études de cas
├── personnel/         → Centres d'intérêt
└── contact/           → Formulaire + coordonnées

components/
├── Layout/            → Header (sticky + menu mobile) + Footer
├── ui/                → Button, Tag, PhotoPlaceholder, SectionLabel
├── home/              → Hero, QuickStats, ExpertiseTeaser, MiniTimeline, PersonalTeaser
├── parcours/          → TimelineItem
├── expertises/        → ExpertiseCard
├── contact/           → ContactForm
└── shared/            → FadeInWhenVisible, PageHero

data/
├── experiences.ts     → Expériences professionnelles
├── formations.ts      → Formations académiques
├── expertises.ts      → Domaines d'expertise + soft skills + outils
└── interests.ts       → Centres d'intérêt + destinations de voyage
```

## Personnalisation

### Ajouter une vraie photo portrait

Remplacer le composant `<PhotoPlaceholder label="portrait" />` par :

```tsx
import Image from "next/image";

<Image
  src="/photos/portrait.jpg"
  alt="Adeline Auguet"
  fill
  className="object-cover rounded-xl"
/>
```

Placer les photos dans le dossier `public/photos/`.

### Ajouter le lien LinkedIn

Dans `components/Layout/Footer.tsx` et `app/contact/page.tsx`, remplacer `href="#"` par l'URL du profil LinkedIn.

### Activer l'envoi du formulaire

Dans `components/contact/ContactForm.tsx`, remplacer la logique `mailto:` par une intégration [Resend](https://resend.com) ou [Formspree](https://formspree.io).

## Charte graphique

Palette complète dans `tailwind.config.ts`. Typographies : Cormorant Garamond (titres) + Inter (texte) via Google Fonts.
