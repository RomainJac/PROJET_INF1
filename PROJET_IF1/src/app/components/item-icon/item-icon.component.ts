import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from "../../data/model/Item";
import {ItemInfobulleComponent} from "../item-infobulle/item-infobulle.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  standalone: true,
  imports: [
    ItemInfobulleComponent,
    NgIf
  ],
  styleUrls: ['./item-icon.component.css']
})
export class ItemIconComponent {
  @Input() item: Item | undefined;
  showInfobulle = false;
  tooltipX = 0;
  tooltipY = 0;

  constructor(private router: Router) {}


  onIconClick(): void {
    if (this.item) {
      this.router.navigate(['/items', this.item.id]);
    }
  }


  showTooltip(event: MouseEvent): void {
    this.showInfobulle = true;
    this.updateTooltipPosition(event);
  }

  updateTooltipPosition(event: MouseEvent) {
    this.tooltipX = event.pageX +10;
    this.tooltipY = event.pageY + 10;
  }


  hideTooltip(): void {
    this.showInfobulle = false;
  }
}
