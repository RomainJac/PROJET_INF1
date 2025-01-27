import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemIconComponent } from '../item-icon/item-icon.component';
import {Item} from "../../data/model/Item";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemIconComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() items: Item[] = [];
}
