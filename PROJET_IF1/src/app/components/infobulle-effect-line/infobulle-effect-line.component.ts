// infobulle-effect-line.component.ts
import { Component, Input } from '@angular/core';
import {Effect, EffectType} from "../../data/model/Item";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-infobulle-effect-line',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './infobulle-effect-line.component.html',
  styleUrls: ['./infobulle-effect-line.component.css']
})
export class InfobulleEffectLineComponent {
  @Input() effect: Effect = {
    element: "Neutre",
    min: 0,
    max: 0,
    effectType: "Dommage"
  };

  displayEffect() {
    const { min, max, effectType, element } = this.effect;
    return min === max || max===undefined ? `${min} ${effectType} ${element}` : `${min} à ${max} ${effectType} ${element}`;
  }

  getEffectClass() {
    const classMap: { [key: string]: string } = {
      "Neutre": "effect-neutral",
      "Terre": "effect-earth",
      "Feu": "effect-fire",
      "Eau": "effect-water",
      "Air": "effect-air"
    };
    return classMap[this.effect.element] || "effect-neutral"; // Par défaut, "effect-neutral"
  }
}
