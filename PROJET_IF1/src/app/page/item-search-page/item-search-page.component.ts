import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTemplateComponent} from '../page-template/page-template.component';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {ItemListComponent} from "../../components/item-list/item-list.component";
import {Item} from "../../data/model/Item";
import {ItemService} from "../../service/ItemService";
import {Observable} from "rxjs";

@Component({
  selector: 'app-item-search-page',
  standalone: true,
  imports: [CommonModule, PageTemplateComponent, SearchBarComponent, ItemListComponent],
  templateUrl: './item-search-page.component.html',
  styleUrl: './item-search-page.component.css'
})
export class ItemSearchPageComponent implements OnInit{
  items: Observable<Item[]> = new Observable<Item[]>();

  constructor(private itemService:ItemService) {
  }

  onSearch(query: string): void {
    this.items = this.itemService.searchItems(query)
  }

  ngOnInit(): void {
    this.items = this.itemService.searchItems()
  }
}
