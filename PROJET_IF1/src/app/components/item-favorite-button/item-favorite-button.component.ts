import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() protected toggleFavourite : EventEmitter<void> = new EventEmitter<void>();

  protected onToggle() {
    this.toggleFavourite.emit();
  }
}
