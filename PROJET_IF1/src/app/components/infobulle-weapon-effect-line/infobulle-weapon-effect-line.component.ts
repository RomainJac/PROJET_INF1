import {Component, Input} from '@angular/core';
import {WeaponEffectLine} from "../../data/model/Item";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-infobulle-weapon-effect-line',
  standalone: true,
    imports: [
        NgClass,
        NgIf
    ],
  templateUrl: './infobulle-weapon-effect-line.component.html',
  styleUrl: './infobulle-weapon-effect-line.component.css'
})
export class InfobulleWeaponEffectLineComponent {
  @Input() public weaponEffect: WeaponEffectLine = {
    min: 0,
    max: 0,
    characteristicType: "Dégats Neutre",
  };
  protected getColorClass(): string {
    const colorMapping: Record<string, string> = {
      "Dégats Neutre": "neutral-damage",
      "PA": "pa",
      "Vol eau": "water-steal",
      "Vol terre": "earth-steal",
      "Vol air": "air-steal",
      "Vol feu": "fire-steal",
      "Vol neutre": "neutral-steal",
      "Dégats Eau": "water-damage",
      "Dégats Terre": "earth-damage",
      "Dégats Air": "air-damage",
      "Dégats Feu": "fire-damage",
    };
    return colorMapping[this.weaponEffect.characteristicType];
  }
}
