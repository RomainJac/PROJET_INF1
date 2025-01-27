import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Item} from "../../data/model/Item";
import {
  InfobulleCharacteristicLineComponent
} from "../infobulle-characteristic-line/infobulle-characteristic-line.component";
import {InfobulleDescriptionComponent} from "../infobulle-description/infobulle-description.component";
import {InfobulleEffectLineComponent} from "../infobulle-effect-line/infobulle-effect-line.component";
import {InfobulleConditionComponent} from "../infobulle-condition/infobulle-condition.component";

@Component({
  selector: 'app-item-infobulle',
  standalone: true,
  imports: [CommonModule, InfobulleCharacteristicLineComponent, InfobulleDescriptionComponent, InfobulleEffectLineComponent, InfobulleConditionComponent],
  templateUrl: './item-infobulle.component.html',
  styleUrl: './item-infobulle.component.css'
})
export class ItemInfobulleComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() item?: Item;
}
