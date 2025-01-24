export interface Item {
  characteristics: CharacteristicLine[]
  name: string
  level: number
  imageUrl: string
  type: ItemType
}


export interface CharacteristicLine {
  type: "BONUS" | "MALUS",
  min: number,
  max: number,
  characteristicType: CharacteristicType
}

export type CharacteristicType =
  "Vitalité"
  | "Force"
  | "Agilité"
  | "Intelligence"
  | "Chance"
  | "Sagesse"
  | "PA"
  | "PM"
  | "PO"
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
  | "Dommage Terre"


export type ItemType =
  "Amulette"
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
  | "Arme"
