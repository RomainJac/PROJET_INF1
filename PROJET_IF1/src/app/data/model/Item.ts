import {CHARACTERISTIC_CODE_MAPPING} from "../mapper/CharacteristicCodeMapping";

export interface Item {
  id: string;
  name: string;
  level: number;
  imageUrl: string;
  type: ItemType;
  characteristics: CharacteristicLine[];
  pods: number;
  description?: string;
  conditions?: Condition[];
}

export interface CharacteristicLine {
  min: number;
  max: number;
  isPercentage?: boolean;
  characteristicType: CharacteristicType;
}

export interface Condition {
  characteristic: CharacteristicType;
  min?: number;
  max?: number;
  operator: ">=" | "<=" | "=";
}

export type EffectType =
  | "Vol de vie"
  | "Dommage"

export type CharacteristicType = (typeof CHARACTERISTIC_CODE_MAPPING)[keyof typeof CHARACTERISTIC_CODE_MAPPING];

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
