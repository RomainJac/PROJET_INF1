import { Component, Input } from '@angular/core';
import { Condition } from "../../data/model/Item";
import { InfobulleWeaponEffectLineComponent } from "../infobulle-weapon-effect-line/infobulle-weapon-effect-line.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-infobulle-condition',
  standalone: true,
  imports: [
    InfobulleWeaponEffectLineComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './infobulle-condition.component.html',
  styleUrls: ['./infobulle-condition.component.css']
})
export class InfobulleConditionComponent {
  @Input() public conditions: Condition[] = [];

protected hasConditions(): boolean {
    return this.conditions && this.conditions.length > 0;
  }

  protected getConditionDisplayText(condition: Condition): string {
    const { characteristic, operator, number } = condition;
    return `${characteristic} ${operator} ${number}`;
  }

  protected getLogicalOperator(index: number): string {
    return index < this.conditions.length - 1 ? (this.conditions[index].logicalOperator ?? '') : '';
  }
}
