import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTemplateComponent} from '../page-template/page-template.component';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {ItemListComponent} from "../../components/item-list/item-list.component";
import {Item} from "../../data/model/Item";
import {ItemService} from "../../service/ItemService";
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-item-search-page',
  standalone: true,
  imports: [CommonModule, PageTemplateComponent, SearchBarComponent, ItemListComponent, InfiniteScrollModule],
  templateUrl: './item-search-page.component.html',
  styleUrls: ['./item-search-page.component.css']
})
export class ItemSearchPageComponent implements OnInit {
  protected items: Item[] = [];
  protected currentPage: number = 1;
  protected isLoading: boolean = false;
  protected query: string = '';

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  protected onSearch(query: string): void {
    this.query = query;
    this.currentPage = 1;
    this.items = [];
    this.fetchItems(this.query);
  }

  protected onScroll(): void {
    this.fetchItems(this.query);
  }

  private fetchItems(query: string = ''): void {
    if (this.isLoading) return;
    this.isLoading = true;

    this.itemService.searchItems(query, this.currentPage).subscribe((newItems) => {
      this.items = [...this.items, ...newItems];
      this.currentPage++;
      this.isLoading = false;
    });
  }
}
