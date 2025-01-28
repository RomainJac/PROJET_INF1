import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CharacteristicLine, CharacteristicType, Condition, EffectType, Item} from "../data/model/Item";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private readonly API_URL = 'https://api.dofusdb.fr/items';

  constructor(private http: HttpClient) {
  }

  private static mapCharacteristics(effects: any[]): CharacteristicLine[] {

    const characteristicMapping = {
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
      92: 'Dommages Neutre'
    };

    return effects
      .map(effect => {

        // @ts-ignore
        const characteristicName = characteristicMapping[effect.characteristic]|| "Unknown";
        console.log(`Mapping characteristic: ${JSON.stringify(effect)} -> ${characteristicName}`);

        return {
          type: effect.category,
          min: effect.from || 0,
          max: effect.to || effect.from || 0,
          characteristicType: characteristicName,
          isPercentage: effect.category == 1
        };
      });
  }


  private static async fetchEffectById(effectId: number): Promise<any> {
    const url = `https://api.dofusdb.fr/effects/${effectId}`;
    try {
      console.log(`Fetching effect details from: ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Effect fetch failed');
      }
      const data = await response.json();
      console.log(`Effect data fetched successfully: ${JSON.stringify(data)}`);
      return data;
    } catch (error) {
      console.error('Error fetching effect:', error);
      return null;
    }
  }

  private static parseCriteria(criteria: string): Condition[] {

    console.log(`Parsing criteria: ${criteria}`);
    const match = criteria.match(/([A-Z]+)([><=])(\d+)/);
    if (!match) return [];
    console.log(`Parsed criteria match: ${JSON.stringify(match)}`);

    return [{
      characteristic: ItemService.mapCharacteristicType(match[1]),
      operator: match[2] as ">=" | "<=" | "=",
      min: parseInt(match[3]),
    }];
  }

  private static mapCharacteristicType(type: string): CharacteristicType {
    const mapping: Record<string, CharacteristicType> = {
      "CI": "Intelligence",
      "CH": "Chance",
      "VI": "Vitalité",
      "AG": "Agilité",
      "FO": "Force",
      "SA": "Sagesse",
      "PA": "PA",
      "PM": "PM",
    };
    console.log(`Mapping characteristic type: ${type} to ${mapping[type] || 'Vitalité'}`);
    return mapping[type] || "Vitalité";
  }

  private static mapEffectType(type: string): EffectType {
    if (type.includes("Vol de vie")) return "Vol de vie";
    if (type.includes("Dommage")) return "Dommage";
    console.log(`Mapping effect type: ${type}`);
    return "Dommage";
  }

  private static mapElement(type: string): "Neutre" | "Terre" | "Feu" | "Eau" | "Air" {
    const elements: Record<string, "Neutre" | "Terre" | "Feu" | "Eau" | "Air"> = {
      "Neutral": "Neutre",
      "Earth": "Terre",
      "Fire": "Feu",
      "Water": "Eau",
      "Air": "Air",
    };
    console.log(`Mapping element: ${type} to ${elements[type] || "Neutre"}`);
    return elements[type] || "Neutre";
  }

  findById(itemId: string): Observable<Item> {
    const url = `${this.API_URL}/${itemId}`;
    return this.http.get<any>(url).pipe(
      map((response) => this.mapToItem(response))
    );
  }

  public searchItems(search: string = '', page: number = 1, limit: number = 50): Observable<Item[]> {
    const skip = (page - 1) * limit;


    let url = `${this.API_URL}?typeId[$ne]=203&$sort=-level&level[$gte]=0&level[$lte]=200&$skip=${skip}&lang=fr`;


    const typeIds = [1, 9, 2, 3, 4, 5, 6, 7, 8, 19, 22, 271, 11, 82, 17, 10, 16];
    typeIds.forEach(id => url += `&typeId[$in][]=${id}`);


    if (search.trim()) {
      url += `&slug.fr[$search]=${encodeURIComponent(search)}`;
    }

    console.log(`Searching items with URL: ${url}`);

    return this.http.get<any>(url).pipe(
      map((response) => {
        console.log(`API response: ${JSON.stringify(response)}`);
        return response.data.map(this.mapToItem);
      })
    );
  }

  private mapToItem(apiItem: any): Item {
    console.log(`Mapping item: ${JSON.stringify(apiItem)}`);
    return {
      id: apiItem.id.toString(),
      name: apiItem.name.fr,
      level: apiItem.level,
      imageUrl: apiItem.img,
      type: apiItem.superType?.name?.fr || apiItem.name.fr,
      pods: apiItem.realWeight,
      description: apiItem.description?.fr || "",
      characteristics: ItemService.mapCharacteristics(apiItem.effects),
      conditions: ItemService.parseCriteria(apiItem.criteria),
    };
  }
}
