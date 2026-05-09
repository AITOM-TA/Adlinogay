export interface Interest {
  title: string;
  icon: string;
  category: "sport" | "culture" | "voyage";
}

export interface TravelDestination {
  continent: string;
  countries: string[];
  description: string;
}

export const interests: Interest[] = [
  { title: "Course à pied", icon: "Footprints", category: "sport" },
  { title: "Randonnée", icon: "Mountain", category: "sport" },
  { title: "Plongée sous-marine", icon: "Waves", category: "sport" },
  { title: "Littérature", icon: "BookOpen", category: "culture" },
  { title: "Cinéma", icon: "Film", category: "culture" },
];

export const travelDestinations: TravelDestination[] = [
  {
    continent: "Asie",
    countries: ["Japon", "Vietnam", "Thaïlande"],
    description:
      "Contrastes saisissants entre tradition et modernité, une invitation permanente à reconsidérer ses certitudes.",
  },
  {
    continent: "Océanie",
    countries: ["Nouvelle-Zélande"],
    description:
      "Six mois d'immersion professionnelle et personnelle dans un pays aux paysages irréels — une expérience fondatrice.",
  },
  {
    continent: "Europe",
    countries: ["Italie", "Espagne", "Portugal", "Grèce", "Monaco"],
    description:
      "L'art de vivre méditerranéen comme toile de fond d'une curiosité géographique constante.",
  },
  {
    continent: "Russie",
    countries: ["Russie"],
    description:
      "Une histoire immense, des contrastes culturels qui dépassent toutes les attentes.",
  },
  {
    continent: "Afrique",
    countries: ["Afrique du Sud"],
    description:
      "La beauté brute d'un continent qui remet à l'échelle. La faune, les espaces, les rencontres.",
  },
];
