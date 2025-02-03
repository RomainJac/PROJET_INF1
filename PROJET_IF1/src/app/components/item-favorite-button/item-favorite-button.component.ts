import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-item-favorite-button',
  standalone: true,
  templateUrl: './item-favorite-button.component.html',
  imports: [
    NgClass,
    NgIf
  ],
  styleUrl: './item-favorite-button.component.css'
})
export class ItemFavoriteButtonComponent {
  @Input() isLoggedIn: boolean = false;
  @Input() isFavourite: boolean = false;
  @Output() toggleFavourite = new EventEmitter<void>();

  onToggle() {
    this.toggleFavourite.emit();
  }
}
