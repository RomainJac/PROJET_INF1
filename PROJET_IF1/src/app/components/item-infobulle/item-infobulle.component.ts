import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Item} from "../../data/model/Item";

@Component({
  selector: 'app-item-infobulle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-infobulle.component.html',
  styleUrl: './item-infobulle.component.css'
})
export class ItemInfobulleComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() item?: Item;
}
