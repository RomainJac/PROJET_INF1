import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
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
export class ItemInfobulleComponent implements AfterViewInit {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() item?: Item;

  @ViewChild('tooltip') tooltipRef!: ElementRef<HTMLElement>;

  private margin = 10;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.adjustTooltipPosition();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    requestAnimationFrame(() => this.adjustTooltipPosition());
  }

  @HostListener('window:resize')
  onResize() {
    requestAnimationFrame(() => this.adjustTooltipPosition());

  }

  private adjustTooltipPosition() {
    if (!this.tooltipRef) return;

    const tooltip = this.tooltipRef.nativeElement;
    const rect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let newX = this.x;
    let newY = this.y;


    if (newX + rect.width + this.margin > viewportWidth + scrollX) {
      newX = this.x - rect.width - this.margin;
    }

    if (newY + rect.height + this.margin > viewportHeight + scrollY) {
      newY = this.y - rect.height - this.margin;
    }


    this.x = Math.max(this.margin + scrollX, newX);
    this.y = Math.max(this.margin + scrollY, newY);

    this.cdr.detectChanges();

  }
}
