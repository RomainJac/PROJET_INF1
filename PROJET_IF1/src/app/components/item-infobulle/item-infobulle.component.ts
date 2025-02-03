import {Component, HostListener, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Item} from "../../data/model/Item";
import {
  InfobulleWeaponEffectLineComponent
} from "../infobulle-weapon-effect-line/infobulle-weapon-effect-line.component";
import {
  InfobulleCharacteristicLineComponent
} from "../infobulle-characteristic-line/infobulle-characteristic-line.component";
import {InfobulleConditionComponent} from "../infobulle-condition/infobulle-condition.component";

@Component({
  selector: 'app-item-infobulle',
  standalone: true,
  imports: [CommonModule, InfobulleWeaponEffectLineComponent, InfobulleCharacteristicLineComponent, InfobulleConditionComponent],
  templateUrl: './item-infobulle.component.html',
  styleUrl: './item-infobulle.component.css'
})
export class ItemInfobulleComponent {
  @Input() protected x: number = 0;
  @Input() protected y: number = 0;
  @Input() protected item?: Item;

  private margin = 50;

  constructor() {}

  private adjustTooltipPosition() {
    setTimeout(() => {
      const tooltip = document.querySelector('.infobulle') as HTMLElement;
      if (!tooltip) return;

      const rect = tooltip.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newX = this.x;
      let newY = this.y;

      if (this.x + rect.width + this.margin > viewportWidth) {
        newX = viewportWidth - rect.width - this.margin ;
      }

      if (this.y + rect.height + this.margin > viewportHeight) {
        newY = viewportHeight - rect.height - this.margin;
      }

      this.x = Math.max(this.margin, newX);
      this.y = Math.max(this.margin, newY);
    }, 0);
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustTooltipPosition();
  }
}
