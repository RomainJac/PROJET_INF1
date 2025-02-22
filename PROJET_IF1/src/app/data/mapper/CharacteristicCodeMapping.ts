export const CHARACTERISTIC_CODE_MAPPING: Record<number, string> = {
  0: 'Points de vie',
  1: "PA",
  10: 'Force',
  11: 'Vitalité',
  12: 'Sagesse',
  120: 'Dommages Distance',
  121: 'Résistances Distance',
  122: 'Dommages d\'Arme',
  123: 'Dommages aux Sorts',
  124: 'Résistances Mêlée',
  125: 'Dommages Mêlée',
  13: 'Chance',
  14: 'Agilité',
  15: 'Intelligence',
  16: 'Dommages',
  18: 'Critique',
  19: "PO",
  23: "PM",
  25: "Puissance",
  26: "Invocation",
  27: 'Esquive PA',
  28: 'Esquive PM',
  33: 'Résistance Neutre',
  34: 'Résistance Terre',
  35: 'Résistance Feu',
  36: 'Résistance Eau',
  37: 'Résistance Air',
  40: 'Pods',
  44: 'Initiative',
  48: 'Prospection',
  49: 'Soins',
  50: 'Renvoi',
  54: 'Résistance Terre',
  55: 'Résistance Feu',
  56: 'Résistance Eau',
  57: 'Résistance Air',
  58: 'Résistance Neutre',
  69: 'Puissance Pièges',
  70: 'Dommages Pièges',
  78: 'Fuite',
  79: 'Tacle',
  82: 'Retrait PA',
  83: 'Retrait PM',
  84: 'Dommage Poussée',
  85: 'Résistance Poussée',
  86: 'Dommages critiques',
  87: 'Résistances critiques',
  88: 'Dommages Terre',
  89: 'Dommages Feu',
  90: 'Dommages Eau',
  91: 'Dommages Air',
  92: 'Dommages Neutre',
  93: 'Vol Feu',
  99: 'Dégats Feu',
  96: 'Dégats Eau',


} as const;


export const WEAPON_DAMAGE_CODE_MAPPING: Record<number, string> = {
  100: 'Dégats Neutre',
  101: 'PA',
  91: 'Vol Eau',
  92: 'Vol Terre',
  93: 'Vol Air',
  94: 'Vol Feu',
  95: 'Vol neutre',
  96: 'Dégats Eau',
  97: "Dégats Terre",
  98: 'Dégats Air',
  99: 'Dégats Feu'
} as const;
