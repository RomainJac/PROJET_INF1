import {Component, Input} from '@angular/core';
import {CharacteristicLine} from "../../data/model/Item";

@Component({
  selector: 'app-infobulle-characteristic-line',
  standalone: true,
  imports: [],
  templateUrl: './infobulle-characteristic-line.component.html',
  styleUrls: ['./infobulle-characteristic-line.component.css']
})
export class InfobulleCharacteristicLineComponent {
  @Input() characteristic: CharacteristicLine = {
    min: 0,
    max: 0,
    characteristicType: "Vitalité",
    isPercentage: false
  };

  displayCharacteristic(): string {
    const {min, max, characteristicType, isPercentage} = this.characteristic;
    const valueSuffix = isPercentage ? '%' : '';

    return min === max
      ? `${min}${valueSuffix} ${characteristicType}`
      : `${min}${valueSuffix} à ${max}${valueSuffix} ${characteristicType}`;
  }
}
