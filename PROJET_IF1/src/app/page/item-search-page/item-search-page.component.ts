import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTemplateComponent} from '../page-template/page-template.component';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {ItemListComponent} from "../../components/item-list/item-list.component";
import {Item} from "../../data/model/Item";
import {ItemRepository} from "../../data/repository/ItemRepository";

@Component({
  selector: 'app-item-search-page',
  standalone: true,
  imports: [CommonModule, PageTemplateComponent, SearchBarComponent, ItemListComponent],
  templateUrl: './item-search-page.component.html',
  styleUrl: './item-search-page.component.css'
})
export class ItemSearchPageComponent {
  items: Item[] = [...ItemRepository.search('')];

  onSearch(query: string): void {
    this.items = ItemRepository.search(query)
  }
}
