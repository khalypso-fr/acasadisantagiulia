import {
  BsFillCalendarWeekFill,
  BsSignpost2,
  BsPatchQuestion,
} from "react-icons/bs";
import { IconType } from "react-icons/lib";

type Feature = { icon: IconType; title: string; description: string };

export const Features: Feature[] = [
  {
    icon: BsFillCalendarWeekFill,
    title: "Réserver votre séjour",
    description:
      "Découvrez les services proposés pour les visiteurs de nos 7 villas allant de 2 à 8 personnes",
  },
  {
    icon: BsSignpost2,
    title: "Préparer mon voyage",
    description:
      "Nous avons sélectionné pour vous quelques restaurants, activités et lieux à visiter sur Porto-Vecchio et dans les alentours",
  },
  {
    icon: BsPatchQuestion,
    title: "Notre histoire",
    description: "Faites connaissance avec notre équipe",
  },
];
