import {Item} from "../model/Item";

export const ITEMS_FIXTURE: Item[] = [
    {
      name: "Amulette du Bouftou",
      level: 10,
      imageUrl: "https://api.dofusdb.fr/img/items/6007.png",
      type: "Amulette",
      characteristics: [
        {type: "BONUS", min: 5, max: 10, characteristicType: "Vitalité"},
        {type: "BONUS", min: 1, max: 3, characteristicType: "Force"},
      ],
      pods: 10,
      description: "Une amulette en cuir de Bouftou, robuste et résistante.",
    },
    {
      name: "Anneau du Jeune Aventurier",
      level: 5,
      imageUrl: "https://api.dofusdb.fr/img/items/6008.png",
      type: "Anneau",
      characteristics: [
        {type: "BONUS", min: 200, max: 500, characteristicType: "Vitalité"},
        {type: "BONUS", min: 50, max: 70, characteristicType: "Intelligence"},
        {type: "BONUS", min: 1, max: 1, characteristicType: "PA"},
        {type: "BONUS", min: 20, max: 30, characteristicType: "Sagesse"},
        {type: "MALUS", min: 30, max: 50, characteristicType: "Force"},
      ],
      pods: 5,
    },
    {
      name: "Bottes de l'Apprenti",
      level: 12,
      imageUrl: "https://api.dofusdb.fr/img/items/6009.png",
      type: "Bottes",
      characteristics: [
        {type: "BONUS", min: 2, max: 4, characteristicType: "Agilité"},
        {type: "BONUS", min: 1, max: 2, characteristicType: "PM"},
      ],
      pods: 15,
    },
    {
      name: "Bouclier du Guerrier",
      level: 25,
      imageUrl: "https://api.dofusdb.fr/img/items/6003.png",
      type: "Bouclier",
      characteristics: [
        {type: "BONUS", min: 3, max: 7, characteristicType: "Résistance Terre"},
      ],
      pods: 20,
      conditions: [
        {characteristic: "Force", min: 20, operator: ">="},
      ],
    },
    {
      name: "Cape du Démon",
      level: 18,
      imageUrl: "https://api.dofusdb.fr/img/items/6014.png",
      type: "Cape",
      characteristics: [
        {type: "BONUS", min: 5, max: 10, characteristicType: "Force"},
        {type: "MALUS", min: 2, max: 4, characteristicType: "Vitalité"},
      ],
      pods: 12,
    },
    {
      name: "Ceinture du Chasseur",
      level: 20,
      imageUrl: "https://api.dofusdb.fr/img/items/6089.png",
      type: "Ceinture",
      characteristics: [
        {type: "BONUS", min: 3, max: 5, characteristicType: "Dommage Terre"},
      ],
      pods: 10,
    },
    {
      name: "Coiffe du Sage",
      level: 15,
      imageUrl: "https://api.dofusdb.fr/img/items/5007.png",
      type: "Coiffe",
      characteristics: [
        {type: "BONUS", min: 5, max: 8, characteristicType: "Sagesse"},
      ],
      pods: 8,
    },
    {
      name: "Dofus Écarlate",
      level: 50,
      imageUrl: "https://api.dofusdb.fr/img/items/4007.png",
      type: "Dofus",
      characteristics: [
        {type: "BONUS", min: 50, max: 80, characteristicType: "Force"},
      ],
      pods: 1,
    },
    {
      name: "Familier Tofu",
      level: 1,
      imageUrl: "https://api.dofusdb.fr/img/items/9007.png",
      type: "Familier",
      characteristics: [
        {type: "BONUS", min: 1, max: 2, characteristicType: "PM"},
      ],
      pods: 5,
    },
    {
      name: "Sac à dos du Voyageur",
      level: 30,
      imageUrl: "https://api.dofusdb.fr/img/items/8007.png",
      type: "Sac à dos",
      characteristics: [
        {type: "BONUS", min: 10, max: 15, characteristicType: "Chance"},
      ],
      pods: 25,
    },
    {
      name: "Épée de Bravoure",
      level: 35,
      imageUrl: "https://api.dofusdb.fr/img/items/10007.png",
      type: "Arme",
      characteristics: [
        {type: "BONUS", min: 7, max: 12, characteristicType: "Force"},
        {type: "BONUS", min: 3, max: 6, characteristicType: "Dommage Terre"},
        {type: "MALUS", min: 1, max: 3, characteristicType: "Vitalité"},
      ],
      pods: 18,
    },
    {
      name: "Bouclier de l'Ancien",
      level: 40,
      imageUrl: "https://api.dofusdb.fr/img/items/11007.png",
      type: "Bouclier",
      characteristics: [
        {type: "BONUS", min: 4, max: 9, characteristicType: "Résistance Feu"},
        {type: "BONUS", min: 2, max: 5, characteristicType: "Tacle"},
        {type: "BONUS", min: 3, max: 7, characteristicType: "Vitalité"},
      ],
      pods: 22,
    },
    {
      name: "Anneau du Sage",
      level: 28,
      imageUrl: "https://api.dofusdb.fr/img/items/9011.png",
      type: "Anneau",
      characteristics: [
        {type: "BONUS", min: 6, max: 9, characteristicType: "Sagesse"},
        {type: "BONUS", min: 1, max: 3, characteristicType: "Prospection"},
        {type: "BONUS", min: 2, max: 4, characteristicType: "PA"},
      ],
      pods: 8,
    },
    {
      name: "Amulette du Bouftou",
      level: 10,
      imageUrl: "https://api.dofusdb.fr/img/items/6007.png",
      type: "Amulette",
      characteristics: [
        {type: "BONUS", min: 5, max: 10, characteristicType: "Vitalité"},
        {type: "BONUS", min: 1, max: 3, characteristicType: "Force"},
        {type: "BONUS", min: 1, max: 2, characteristicType: "Agilité"},
      ],
      pods: 10,
      description: "Une amulette en cuir de Bouftou, robuste et résistante.",
      conditions: [{characteristic: "Force", min: 10, operator: ">="}],
      effects: [
        {effectType: "Vol de vie", element: "Neutre", min: 2},
        {effectType: "Dommage", element: "Terre", min: 5, max: 10},
      ],
    },
    {
      name: "Anneau du Jeune Aventurier",
      level: 5,
      imageUrl: "https://api.dofusdb.fr/img/items/6008.png",
      type: "Anneau",
      characteristics: [
        {type: "BONUS", min: 200, max: 500, characteristicType: "Vitalité"},
        {type: "BONUS", min: 50, max: 70, characteristicType: "Intelligence"},
        {type: "BONUS", min: 1, max: 1, characteristicType: "PA"},
        {type: "BONUS", min: 20, max: 30, characteristicType: "Sagesse"},
        {type: "MALUS", min: 30, max: 50, characteristicType: "Force"},
      ],
      pods: 5,
      conditions: [],
      effects: [
        {effectType: "Vol de vie", element: "Neutre", min: 3, max: 5},
        {effectType: "Dommage", element: "Feu", min: 10, max: 20},
      ],
    },
    {
      name: "Bottes de l'Apprenti",
      level: 12,
      imageUrl: "https://api.dofusdb.fr/img/items/6009.png",
      type: "Bottes",
      characteristics: [
        {type: "BONUS", min: 2, max: 4, characteristicType: "Agilité"},
        {type: "BONUS", min: 1, max: 2, characteristicType: "PM"},
        {type: "BONUS", min: 1, max: 3, characteristicType: "Chance"},
        {type: "MALUS", min: 5, max: 7, characteristicType: "Vitalité"},
      ],
      pods: 15,
      effects: [
        {effectType: "Dommage", element: "Eau", min: 1, max: 5},
        {effectType: "Dommage", element: "Air", min: 5, max: 5},
      ],
      conditions: [
        {characteristic: "Agilité", min: 10, operator: ">="},
      ],
    },
    {
      name: "Bouclier du Guerrier",
      level: 25,
      imageUrl: "https://api.dofusdb.fr/img/items/6003.png",
      type: "Bouclier",
      characteristics: [
        {type: "BONUS", min: 3, max: 7, characteristicType: "Résistance Terre"},
        {type: "BONUS", min: 2, max: 3, characteristicType: "Tacle"},
        {type: "BONUS", min: 1, max: 2, characteristicType: "Force"},
        {type: "MALUS", min: 5, max: 10, characteristicType: "Sagesse"},
        {type: "MALUS", min: 10, max: 20, characteristicType: "Agilité"},
      ],
      pods: 20,
      conditions: [{characteristic: "Force", min: 20, operator: ">="}],
      effects: [
        {effectType: "Dommage", element: "Terre", min: 5, max: 10},
        {effectType: "Vol de vie", element: "Feu", min: 2},
      ],
    },
    {
      name: "Cape du Démon",
      level: 18,
      imageUrl: "https://api.dofusdb.fr/img/items/6014.png",
      type: "Cape",
      characteristics: [
        {type: "BONUS", min: 5, max: 10, characteristicType: "Force"},
        {type: "MALUS", min: 2, max: 4, characteristicType: "Vitalité"},
        {type: "BONUS", min: 1, max: 2, characteristicType: "PA"},
      ],
      pods: 12,
      effects: [
        {effectType: "Vol de vie", element: "Air", min: 1, max: 100},
      ],
      conditions: [],
    },
    {
      name: "Ceinture du Chasseur",
      level: 20,
      imageUrl: "https://api.dofusdb.fr/img/items/6089.png",
      type: "Ceinture",
      characteristics: [
        {type: "BONUS", min: 3, max: 5, characteristicType: "Dommage Terre"},
        {type: "BONUS", min: 1, max: 2, characteristicType: "Chance"},
        {type: "MALUS", min: 3, max: 6, characteristicType: "Sagesse"},
      ],
      pods: 10,
      effects: [
        {effectType: "Dommage", element: "Terre", min: 5},
      ],
      conditions: [
        {characteristic: "Sagesse", max: 20, operator: "<="},
      ],
    },
    {
      name: "Épée du Dragon",
      level: 40,
      imageUrl: "https://api.dofusdb.fr/img/items/11007.png",
      type: "Arme",
      characteristics: [
        {type: "BONUS", min: 5, max: 10, characteristicType: "Force"},
        {type: "BONUS", min: 3, max: 5, characteristicType: "Dommage Feu"},
        {type: "MALUS", min: 1, max: 2, characteristicType: "Sagesse"},
        {type: "BONUS", min: 1, max: 3, characteristicType: "Agilité"},
      ],
      pods: 20,
      effects: [
        {effectType: "Vol de vie", element: "Neutre", min: 2},
        {effectType: "Dommage", element: "Feu", min: 15, max: 20},
      ],
      conditions: [
        {characteristic: "Force", min: 25, operator: ">="},
        {characteristic: "Sagesse", max: 10, operator: "<="},
      ],
    },
    {
      name: "Hache du Guerrier",
      level: 35,
      imageUrl: "https://api.dofusdb.fr/img/items/5011.png",
      type: "Arme",
      characteristics: [
        {type: "BONUS", min: 7, max: 12, characteristicType: "Force"},
        {type: "BONUS", min: 3, max: 6, characteristicType: "Dommage Terre"},
        {type: "MALUS", min: 2, max: 4, characteristicType: "Vitalité"},
        {type: "BONUS", min: 1, max: 2, characteristicType: "Agilité"},
      ],
      pods: 18,
      effects: [
        {effectType: "Vol de vie", element: "Feu", min: 2},
        {effectType: "Dommage", element: "Terre", min: 10, max: 15},
      ],
      conditions: [{characteristic: "Agilité", min: 15, operator: ">="}],
    },
    {
      name: "Épée de Bravoure",
      level: 35,
      imageUrl: "https://api.dofusdb.fr/img/items/10007.png",
      type: "Arme",
      characteristics: [
        {type: "BONUS", min: 7, max: 12, characteristicType: "Force"},
        {type: "BONUS", min: 3, max: 6, characteristicType: "Dommage Terre"},
        {type: "MALUS", min: 1, max: 3, characteristicType: "Vitalité"},
      ],
      pods: 18,
      effects: [
        {effectType: "Vol de vie", element: "Neutre", min: 1},
        {effectType: "Dommage", element: "Feu", min: 3},
      ],
      conditions: [
        {characteristic: "Force", min: 15, operator: ">="},
      ],
    },

  ]
;
