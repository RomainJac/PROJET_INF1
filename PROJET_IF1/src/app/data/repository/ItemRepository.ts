import {ITEMS_FIXTURE} from "../fixture/Items";
import {Item} from "../model/Item";

export class ItemRepository {
  private static items = ITEMS_FIXTURE

  public static findById(id: string): Item | undefined {
    return ItemRepository.items.find(item => item.id === id);
  }

  public static search(query: string): Item[] {
    const searchTerm = query.toLowerCase();
    return query ==='' ? this.items: this.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }
}
