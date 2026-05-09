export interface Expertise {
  title: string;
  icon: string;
  description: string;
  referentiel: string;
}

export interface SoftSkill {
  title: string;
  description: string;
}

export const expertises: Expertise[] = [
  {
    title: "Validation de Systèmes Informatisés (VSI)",
    icon: "ShieldCheck",
    description:
      "Définition de la stratégie de validation, rédaction du cahier des charges (URS/FRS), analyse de risques avec utilisateurs finaux (PFMEA), rédaction des protocoles, cas de test et rapports QI/QO/QP, exécution des tests et rapports de validation conformes 21 CFR Part 11 / Annexe 11.",
    referentiel: "GAMP 5",
  },
  {
    title: "Qualification d'Équipements",
    icon: "Settings2",
    description:
      "Mise en place de la stratégie de qualification et définition du plan de validation. Rédaction des protocoles de qualification (QI/QO/QP), contrôle du déroulement et des outils de validation. Réalisation des FAT (Factory Acceptance Test) chez les fournisseurs et des SAT (Site Acceptance Test) chez le client.",
    referentiel: "GMP",
  },
  {
    title: "Gestion de Projets Pharmaceutiques",
    icon: "Workflow",
    description:
      "Établissement du cahier des charges, suivi de la conception (besoins, spécifications, livrables, critères de réception), analyse de risques (PFMEA/AMDEC), pilotage de l'équipe projet en coordonnant demandes client, budget et délais. Livraison au niveau de qualité attendu.",
    referentiel: "Méthodologie projet",
  },
  {
    title: "Conformité Réglementaire & Audit",
    icon: "FileCheck",
    description:
      "Préparation d'inspections FDA, audits internes pour l'amélioration du système qualité, formation du personnel aux normes GMP (Good Manufacturing Practice). Maintien de l'état validé et analyses d'impact.",
    referentiel: "FDA · ANSES",
  },
];

export const tools: string[] = [
  "Pack Office",
  "Ennov",
  "MasterControl",
  "EDMS",
  "ERP",
  "Outils de signature électronique",
  "CRM",
  "Univadis",
];

export const softSkills: SoftSkill[] = [
  {
    title: "Méthodique",
    description: "Approche structurée de chaque problématique",
  },
  {
    title: "Esprit d'équipe",
    description: "Coordination naturelle d'équipes pluridisciplinaires",
  },
  {
    title: "Orientée résultats",
    description: "Focus sur la livraison qualité dans les délais",
  },
  {
    title: "Esprit d'analyse et de synthèse",
    description: "Vulgarisation de sujets techniques complexes",
  },
];
