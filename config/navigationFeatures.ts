import { BsSignpost2, BsPatchQuestion, BsBinocularsFill } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export type NavigationFeature = {
  icon: IconType;
  title: string;
  description: string;
  href: string;
};

export const headerNavigationFeatures: NavigationFeature[] = [
  {
    icon: BsBinocularsFill,
    title: "Découvrir le domaine",
    description:
      "Découvrez les services proposés pour les visiteurs de nos 7 villas allant de 2 à 8 personnes",
    href: "/discover",
  },
  {
    icon: BsSignpost2,
    title: "Préparer mon voyage",
    description:
      "Nous avons sélectionné pour vous quelques restaurants, activités et lieux à visiter sur Porto-Vecchio et dans les alentours",
    href: "/activities",
  },
  {
    icon: BsPatchQuestion,
    title: "Notre histoire",
    description: "Faites connaissance avec notre équipe",
    href: "/about",
  },
];
