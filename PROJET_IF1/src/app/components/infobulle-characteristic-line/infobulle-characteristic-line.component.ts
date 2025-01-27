import { Component, Input } from '@angular/core';
import { CharacteristicLine } from "../../data/model/Item";

@Component({
  selector: 'app-infobulle-characteristic-line',
  standalone: true,
  imports: [],
  templateUrl: './infobulle-characteristic-line.component.html',
  styleUrls: ['./infobulle-characteristic-line.component.css']
})
export class InfobulleCharacteristicLineComponent {
  @Input() characteristic: CharacteristicLine = {
    type: "BONUS",
    min: 0,
    max: 0,
    characteristicType: "Vitalité"
  };

  displayCharacteristic() {
    const { min, max, characteristicType, type } = this.characteristic;
    if (type === "MALUS") {
      return min === max ? `-${min} ${characteristicType}` : `-${min} à -${max} ${characteristicType}`;
    }
    return min === max ? `${min} ${characteristicType}` : `${min} à ${max} ${characteristicType}`;
  }
}
