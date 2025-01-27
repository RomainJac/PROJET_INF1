import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplateComponent } from '../page-template/page-template.component';
import {ITEMS_FIXTURE} from "../../data/fixture/Items";
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {ItemListComponent} from "../../components/item-list/item-list.component";
import {Item} from "../../data/model/Item";

@Component({
  selector: 'app-item-search-page',
  standalone: true,
  imports: [CommonModule, PageTemplateComponent, SearchBarComponent, ItemListComponent],
  templateUrl: './item-search-page.component.html',
  styleUrl: './item-search-page.component.css'
})
export class ItemSearchPageComponent {
  allItems: Item[] = ITEMS_FIXTURE;
  // si on avait une API, on aurait juste a fetch avec la query filtrée, mais là il faut ruser pour jamais perdre de data
  filteredItems: Item[] = [...this.allItems];

  onSearch(query: string): void {
    const searchTerm = query.toLowerCase();
    this.filteredItems = this.allItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }
}
