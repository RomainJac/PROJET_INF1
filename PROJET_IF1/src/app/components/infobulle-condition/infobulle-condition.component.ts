import {Component, Input} from '@angular/core';
import {Condition} from "../../data/model/Item";
import {NgForOf, NgIf} from "@angular/common";
import {
  InfobulleWeaponEffectLineComponent
} from "../infobulle-weapon-effect-line/infobulle-weapon-effect-line.component";

@Component({
  selector: 'app-infobulle-condition',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    InfobulleWeaponEffectLineComponent
  ],
  templateUrl: './infobulle-condition.component.html',
  styleUrls: ['./infobulle-condition.component.css']
})
export class InfobulleConditionComponent {
  @Input() conditions: Condition[] = [];
}
