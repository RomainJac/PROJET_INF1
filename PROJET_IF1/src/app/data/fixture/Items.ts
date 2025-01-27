import {Item} from "../model/Item";

export const ITEMS_FIXTURE: Item[] = [
  {
    name: "Amulette du Bouftou",
    level: 10,
    imageUrl: "https://example.com/amulette-bouftou.png",
    type: "Amulette",
    characteristics: [
      { type: "BONUS", min: 5, max: 10, characteristicType: "Vitalité" },
      { type: "BONUS", min: 1, max: 3, characteristicType: "Force" },
    ],
    pods: 10,
    description: "Une amulette en cuir de Bouftou, robuste et résistante.",
  },
  {
    name: "Anneau du Jeune Aventurier",
    level: 5,
    imageUrl: "https://example.com/anneau-aventurier.png",
    type: "Anneau",
    characteristics: [
      { type: "BONUS", min: 3, max: 5, characteristicType: "Vitalité" },
    ],
    pods: 5,
  },
  {
    name: "Bottes de l'Apprenti",
    level: 12,
    imageUrl: "https://example.com/bottes-apprenti.png",
    type: "Bottes",
    characteristics: [
      { type: "BONUS", min: 2, max: 4, characteristicType: "Agilité" },
      { type: "BONUS", min: 1, max: 2, characteristicType: "PM" },
    ],
    pods: 15,
  },
  {
    name: "Bouclier du Guerrier",
    level: 25,
    imageUrl: "https://example.com/bouclier-guerrier.png",
    type: "Bouclier",
    characteristics: [
      { type: "BONUS", min: 3, max: 7, characteristicType: "Résistance Terre" },
    ],
    pods: 20,
    conditions: [
      { characteristic: "Force", min: 20, operator: ">=" },
    ],
  },
  {
    name: "Cape du Démon",
    level: 18,
    imageUrl: "https://example.com/cape-demon.png",
    type: "Cape",
    characteristics: [
      { type: "BONUS", min: 5, max: 10, characteristicType: "Force" },
      { type: "MALUS", min: 2, max: 4, characteristicType: "Vitalité" },
    ],
    pods: 12,
  },
  {
    name: "Ceinture du Chasseur",
    level: 20,
    imageUrl: "https://example.com/ceinture-chasseur.png",
    type: "Ceinture",
    characteristics: [
      { type: "BONUS", min: 3, max: 5, characteristicType: "Dommage Terre" },
    ],
    pods: 10,
  },
  {
    name: "Coiffe du Sage",
    level: 15,
    imageUrl: "https://example.com/coiffe-sage.png",
    type: "Coiffe",
    characteristics: [
      { type: "BONUS", min: 5, max: 8, characteristicType: "Sagesse" },
    ],
    pods: 8,
  },
  {
    name: "Dofus Écarlate",
    level: 50,
    imageUrl: "https://example.com/dofus-ecarlate.png",
    type: "Dofus",
    characteristics: [
      { type: "BONUS", min: 50, max: 80, characteristicType: "Force" },
    ],
    pods: 1,
  },
  {
    name: "Familier Tofu",
    level: 1,
    imageUrl: "https://example.com/familier-tofu.png",
    type: "Familier",
    characteristics: [
      { type: "BONUS", min: 1, max: 2, characteristicType: "PM" },
    ],
    pods: 5,
  },
  {
    name: "Sac à dos du Voyageur",
    level: 30,
    imageUrl: "https://example.com/sac-voyageur.png",
    type: "Sac à dos",
    characteristics: [
      { type: "BONUS", min: 10, max: 15, characteristicType: "Chance" },
    ],
    pods: 25,
  },
  {
    name: "Épée de Bravoure",
    level: 35,
    imageUrl: "https://example.com/epee-bravoure.png",
    type: "Arme",
    characteristics: [
      { type: "BONUS", min: 7, max: 12, characteristicType: "Force" },
      { type: "BONUS", min: 3, max: 6, characteristicType: "Dommage Terre" },
      { type: "MALUS", min: 1, max: 3, characteristicType: "Vitalité" },
    ],
    pods: 18,
  },
  {
    name: "Bouclier de l'Ancien",
    level: 40,
    imageUrl: "https://example.com/bouclier-ancien.png",
    type: "Bouclier",
    characteristics: [
      { type: "BONUS", min: 4, max: 9, characteristicType: "Résistance Feu" },
      { type: "BONUS", min: 2, max: 5, characteristicType: "Tacle" },
      { type: "BONUS", min: 3, max: 7, characteristicType: "Vitalité" },
    ],
    pods: 22,
  },
  {
    name: "Anneau du Sage",
    level: 28,
    imageUrl: "https://example.com/anneau-sage.png",
    type: "Anneau",
    characteristics: [
      { type: "BONUS", min: 6, max: 9, characteristicType: "Sagesse" },
      { type: "BONUS", min: 1, max: 3, characteristicType: "Prospection" },
      { type: "BONUS", min: 2, max: 4, characteristicType: "PA" },
    ],
    pods: 8,
  }
];
