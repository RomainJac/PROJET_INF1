import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CharacteristicLine, Item, ItemType, WeaponEffectLine} from "../data/model/Item";
import {CHARACTERISTIC_CODE_MAPPING, WEAPON_DAMAGE_CODE_MAPPING} from "../data/mapper/CharacteristicCodeMapping";
import {DofusDbItemResponse, EffectResponse} from "../data/model/DofusDbResponse";
import {ConditionParser} from "../data/mapper/ConditionParser";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private readonly API_URL = 'https://api.dofusdb.fr/items';

  constructor(private http: HttpClient) {
  }

// Séparés selon leur type
  private static mapWeaponEffectLines(effects: EffectResponse[]): WeaponEffectLine[] {
    return effects
      .filter(effect => effect.category === 2) // Seulement les effets d'arme
      .map(effect => {
        const characteristicName = WEAPON_DAMAGE_CODE_MAPPING[effect.effectId] || "Unknown";
        console.log(`Mapping weapon effect: ${JSON.stringify(effect)} -> ${characteristicName}`);
        return {
          min: effect.from || 0,
          max: effect.to || effect.from || 0,
          characteristicType: characteristicName,
          category: 2, // Pour signaler que c'est un effet d'arme
        };
      });
  }

  private static mapCharacteristicLines(effects: EffectResponse[]): CharacteristicLine[] {
    return effects
      .filter(effect => effect.category !== 2) // Pas les effets d'arme
      .map(effect => {
        const characteristicName = CHARACTERISTIC_CODE_MAPPING[effect.characteristic] || "Unknown";
        console.log(`Mapping characteristic: ${JSON.stringify(effect)} -> ${characteristicName}`);
        return {
          min: effect.from || 0,
          max: effect.to || effect.from || 0,
          characteristicType: characteristicName,
          isPercentage: effect.category === 1,
        };
      });
  }

// Fonction principale qui appelle les deux
  private static mapCharacteristics(effects: EffectResponse[]): { characteristicLines: CharacteristicLine[], weaponEffectLines: WeaponEffectLine[] } {
    return {
      characteristicLines: this.mapCharacteristicLines(effects),
      weaponEffectLines: this.mapWeaponEffectLines(effects),
    };
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

  findById(itemId: string): Observable<Item> {
    const url = `${this.API_URL}/${itemId}`;
    return this.http.get<any>(url).pipe(
      map((response) => this.mapToItem(response))
    );
  }

  public searchItems(search: string = '', page: number = 1, limit: number = 10): Observable<Item[]> {
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

  private mapToItem(apiItem: DofusDbItemResponse): Item {
    console.log(`Mapping item: ${JSON.stringify(apiItem)}`);
    const { characteristicLines, weaponEffectLines } = ItemService.mapCharacteristics(apiItem.effects);

    return {
      id: apiItem.id.toString(),
      name: apiItem.name.fr,
      level: apiItem.level,
      imageUrl: apiItem.img,
      type: (apiItem.superType?.name?.fr ?? "UNKNOWN") as ItemType,
      pods: apiItem.realWeight,
      description: apiItem.description?.fr || "",
      characteristics: characteristicLines,
      weaponEffects: weaponEffectLines,
      conditions: ConditionParser.mapCondition(apiItem.criteria),
    };
  }}
