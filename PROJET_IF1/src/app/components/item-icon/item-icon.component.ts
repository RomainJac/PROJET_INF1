import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInfobulleComponent } from '../item-infobulle/item-infobulle.component';
import {Item} from "../../data/model/Item";

@Component({
  selector: 'app-item-icon',
  standalone: true,
  imports: [CommonModule, ItemInfobulleComponent],
  templateUrl: './item-icon.component.html',
  styleUrl: './item-icon.component.css'
})
export class ItemIconComponent {
  @Input() item!: Item;

  showInfobulle = false;
  tooltipX = 0;
  tooltipY = 0;

  showTooltip(event: MouseEvent) {
    this.tooltipX = event.clientX + 10; // Décalage pour éviter de masquer le curseur
    this.tooltipY = event.clientY + 10;
    this.showInfobulle = true;
  }

  hideTooltip() {
    this.showInfobulle = false;
  }
}
