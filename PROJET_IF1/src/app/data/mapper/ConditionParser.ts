import {CharacteristicType, Condition} from "../model/Item";

export class ConditionParser {
  private static characteristicMap: Record<string, CharacteristicType> = {
    "CI": "Intelligence",
    "CS": "Force",
    "CA": "Agilité",
    "CL": "Chance",
    "CP": "PA",
    "CM": "PM"
  };

  static mapCondition(condition?: string): Condition[] {
    if (!condition) return [];

    // Premièrement, on gère les OR (|), donc on va séparer par |.
    const orConditions = condition.split("|").map(orCondition => {
      // Ensuite, pour chaque groupe d'OR, on découpe par & pour les conditions ET.
      const andConditions = orCondition.split("&").map(cond => {
        const match = cond.match(/(CI|CS|CA|CL|CP|CM)([<>])(\d+)/);
        if (!match) return null; // Si la condition n'est pas valide, on ignore.

        const [, key, operator, value] = match;
        return {
          characteristic: this.characteristicMap[key],
          operator: operator as ">" | "<",
          number: parseInt(value, 10),
        } as Condition;
      }).filter(Boolean); // On enlève les nulls.

      // Si le groupe contient plusieurs conditions ET, on les relie entre elles avec "AND"
      if (andConditions.length > 1) {
        andConditions.forEach((cond, index) => {
          if (index > 0 && cond) cond.logicalOperator = "ET";  // Applique un ET entre chaque condition du groupe.
        });
      }

      return andConditions.filter(c => c !== null); // On retourne les conditions ET pour un groupe donné d'OR.
    }).filter(Boolean); // Enlève les groupes vides.

    // Maintenant, on applique les OR entre chaque groupe d'ET.
    return orConditions.flat().map((cond, index, arr) => {
      if (index < orConditions.length - 1 && cond) cond.logicalOperator = "OU";  // Applique un OR entre chaque condition du tableau.
      console.log(cond);
      return cond;
    });
  }
}
