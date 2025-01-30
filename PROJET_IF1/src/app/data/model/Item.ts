import {CHARACTERISTIC_CODE_MAPPING, WEAPON_DAMAGE_CODE_MAPPING} from "../mapper/CharacteristicCodeMapping";

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
  weaponEffects?: WeaponEffectLine[];
}

export interface CharacteristicLine {
  min: number;
  max: number;
  isPercentage?: boolean;
  characteristicType: CharacteristicType;
}

export interface WeaponEffectLine {
  min: number;
  max: number;
  characteristicType: WeaponEffectType;
}

export interface Condition {
  characteristic: CharacteristicType;
  number?: number;
  operator: ">" | "<";
  logicalOperator?: "ET" | "OU";
}

export type CharacteristicType = (typeof CHARACTERISTIC_CODE_MAPPING)[keyof typeof CHARACTERISTIC_CODE_MAPPING];
export type WeaponEffectType = (typeof WEAPON_DAMAGE_CODE_MAPPING)[keyof typeof WEAPON_DAMAGE_CODE_MAPPING];
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
  | "UNKNOWN"
  | "Arme";
