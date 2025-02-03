import {Component, Input} from '@angular/core';
import {CharacteristicLine} from "../../data/model/Item";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-infobulle-characteristic-line',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './infobulle-characteristic-line.component.html',
  styleUrls: ['./infobulle-characteristic-line.component.css']
})
export class InfobulleCharacteristicLineComponent {
  @Input() public characteristic: CharacteristicLine = {
    min: 0,
    max: 0,
    characteristicType: "Vitalité",
    isPercentage: false
  };

  protected displayCharacteristic(): string {
    const {min, max, characteristicType, isPercentage} = this.characteristic;
    const valueSuffix = isPercentage ? '%' : '';

    return min === max
      ? `${min}${valueSuffix} ${characteristicType}`
      : `${min}${valueSuffix} à ${max}${valueSuffix} ${characteristicType}`;
  }
  protected getClassForCharacteristic(): { [key: string]: boolean } {
    return {
      bonus: this.characteristic.max > 0,
      malus: this.characteristic.min < 0
    };
  }
}
