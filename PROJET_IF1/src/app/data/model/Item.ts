export interface Item {
  name: string;
  level: number;
  imageUrl: string;
  type: ItemType;
  characteristics: CharacteristicLine[];
  pods: number;
  description?: string;
  conditions?: Condition[];
  effects?: Effect[];
}

export interface CharacteristicLine {
  type: "BONUS" | "MALUS";
  min: number;
  max: number;
  characteristicType: CharacteristicType;
}

export interface Condition {
  characteristic: CharacteristicType;
  min?: number;
  max?: number;
  operator: ">=" | "<=" | "=";
}

export interface Effect {
  effectType: EffectType;
  min?: number;
  max?: number;
}

export type EffectType =
  | "Vol de vie"
  | "Vol de PA"
  | "Vol de PM"

export type CharacteristicType =
  | "Vitalité"
  | "Force"
  | "Agilité"
  | "Intelligence"
  | "Chance"
  | "Sagesse"
  | "PA"
  | "PM"
  | "PO"
  | "Invocation"
  | "Initiative"
  | "Prospection"
  | "Tacle"
  | "Fuite"
  | "Esquive PA"
  | "Esquive PM"
  | "Résistance Neutre"
  | "Résistance Terre"
  | "Résistance Feu"
  | "Résistance Eau"
  | "Résistance Air"
  | "Résistance Critique"
  | "Résistance Poussée"
  | "Résistance Distance"
  | "Résistance Mêlée"
  | "Résistance Sorts"
  | "Résistance Corps à corps"
  | "Dommage Neutre"
  | "Dommage Eau"
  | "Dommage Air"
  | "Dommage Feu"
  | "Dommage Terre";

export type ItemType =
  | "Amulette"
  | "Anneau"
  | "Bottes"
  | "Bouclier"
  | "Cape"
  | "Ceinture"
  | "Coiffe"
  | "Dofus"
  | "Familier"
  | "Sac à dos"
  | "Trophée"
  | "Arme";
