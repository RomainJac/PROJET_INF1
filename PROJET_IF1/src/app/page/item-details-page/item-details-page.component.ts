import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../data/model/Item';
import { PageTemplateComponent } from '../page-template/page-template.component';
import {NgIf, NgForOf, NgClass} from '@angular/common';
import { ItemRepository } from '../../data/repository/ItemRepository';

@Component({
  selector: 'app-item-details-page',
  standalone: true,
  imports: [
    PageTemplateComponent,
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.css']
})
export class ItemDetailsPageComponent implements OnInit {
  item: Item | undefined;
  isLoggedIn: boolean = false;
  isFavourite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.item = ItemRepository.findById(itemId);
      this.isFavourite = this.checkIfFavourite(itemId);
    }
  }

  goBack(): void {
    this.router.navigate(['/items']);
  }

  toggleFavourite(): void {
    if (!this.item) return;

    const itemId = this.item.id.toString();
    let favourites = JSON.parse(localStorage.getItem('favouriteItemIds') || '[]');

    if (favourites.includes(itemId)) {
      favourites = favourites.filter((id: string) => id !== itemId);
      this.isFavourite = false;
    } else {
      favourites.push(itemId);
      this.isFavourite = true;
    }

    localStorage.setItem('favouriteItemIds', JSON.stringify(favourites));
  }

  private checkIfFavourite(itemId: string): boolean {
    const favourites = JSON.parse(localStorage.getItem('favouriteItemIds') || '[]');
    return favourites.includes(itemId);
  }
}
