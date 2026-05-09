export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
  tags: string[];
  international?: boolean;
}

export const experiences: Experience[] = [
  {
    period: "Janvier 2026 — Avril 2026",
    title: "Ingénieure Validation",
    company: "EUROS",
    location: "France",
    bullets: [
      "Élaboration et mise à jour du Plan Directeur de Validation — pilotage des validations de procédés conformément aux plannings et référentiels (ISO 13485, GAMP 5)",
      "Définition des stratégies de validation et rédaction de la documentation technique associée : protocoles QI/QO/QP, management des risques (AMDEC)",
      "Traitement des non-conformités, CAPA, écarts d'audits internes et externes, GAP Analysis et dossiers de Change Control en lien avec les procédés validés",
      "Contribution à l'amélioration continue et participation aux processus de conception/industrialisation de nouveaux produits",
    ],
    tags: ["ISO 13485", "GAMP 5", "Plan Directeur de Validation", "AMDEC", "CAPA"],
  },
  {
    period: "Mars 2023 — Septembre 2025",
    title: "Coordinatrice Validation & Qualification",
    company: "Provepharm",
    location: "Marseille",
    bullets: [
      "Élaboration et déploiement de la stratégie de validation et de qualification dans le respect des référentiels GMP",
      "Rédaction, coordination et exécution des protocoles de qualification (QI/QO/QP) et des plans de validation",
      "Suivi des tests, des anomalies et de la documentation associée (protocoles, rapports, analyses d'impact, maintien de l'état validé)",
      "Contribution à la rédaction des procédures techniques liées aux équipements, aux systèmes d'information et aux utilités",
      "Support et conseil transverse auprès des utilisateurs sur les sujets de validation et d'amélioration continue",
      "Préparation d'une inspection FDA et participation en tant qu'auditrice interne dans le cadre de l'amélioration du système qualité",
    ],
    tags: ["GMP", "QI/QO/QP", "FDA", "Audit interne"],
  },
  {
    period: "Septembre 2019 — Mars 2023",
    title: "Consultante Chef de Projet",
    company: "EFOR CVO",
    location: "Aix-en-Provence",
    bullets: [
      "Gestion intégrale de projets pharmaceutiques, de l'expression du besoin à la mise en service — coordination d'équipes pluridisciplinaires",
      "Qualification et validation d'équipements, de la stratégie aux tests QI/QO/QP et analyses de risques",
      "Validation de systèmes informatisés (VSI) selon GAMP 5 : URS/FRS, analyses de risques, traçabilité, tests QI/QO/QP et rapports de validation conformes 21 CFR Part 11 / Annexe 11",
      "Accompagnement des utilisateurs, formation des équipes opérationnelles, élaboration de supports pédagogiques et amélioration continue des pratiques",
      "Référente technique au Centre d'Expertise Technique d'EFOR CVO : formation initiale et continue des consultants opérationnels",
    ],
    tags: ["GAMP 5", "21 CFR Part 11", "Annexe 11", "Gestion de projet", "Formation"],
  },
  {
    period: "Janvier 2019 — Juillet 2019",
    title: "Stage en Ingénierie de Production",
    company: "Virbac",
    location: "Carros",
    bullets: [
      "Préparation d'un audit de l'ANSES",
      "Mise en place et suivi de la documentation qualité",
      "Requalification d'équipements de production en salle blanche",
    ],
    tags: ["ANSES", "Salle blanche", "Documentation qualité"],
  },
  {
    period: "Mars 2018 — Juin 2018",
    title: "Assistante Chef de Gamme",
    company: "MSD",
    location: "Nouvelle-Zélande",
    bullets: [
      "Création d'un book de campagne à destination des délégués médicaux",
      "Gestion des commandes du matériel promotionnel",
      "Veille concurrentielle sur Univadis",
    ],
    tags: ["International", "Marketing pharma", "Veille"],
    international: true,
  },
  {
    period: "Septembre 2017 — Mars 2018",
    title: "Stage en Pharmacocinétique",
    company: "APHM — CHU Timone",
    location: "Marseille",
    bullets: [
      "Dosage de médicaments et suivi thérapeutique pharmacologique des patients",
      "Participation aux réunions de concertation pluridisciplinaire (RCP)",
      "Réalisation d'une étude observationnelle sur un anti-rétroviral",
    ],
    tags: ["Hospitalier", "Étude observationnelle", "RCP"],
  },
  {
    period: "Juin 2017 — Août 2017",
    title: "Stage en Assurance Qualité",
    company: "Coty-Lancaster",
    location: "Monaco",
    bullets: [
      "S'assurer de la compliance du service qualité aux Guidelines de la FDA",
      "Mise en place et suivi de la documentation qualité",
      "Formation du personnel aux normes GMP (Good Manufacturing Practice)",
    ],
    tags: ["FDA", "GMP", "Formation"],
  },
];
