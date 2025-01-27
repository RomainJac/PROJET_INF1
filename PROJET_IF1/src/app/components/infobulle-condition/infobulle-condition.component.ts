import { Component, Input } from '@angular/core';
import { Condition } from "../../data/model/Item";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-infobulle-condition',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './infobulle-condition.component.html',
  styleUrls: ['./infobulle-condition.component.css']
})
export class InfobulleConditionComponent {
  @Input() conditions: Condition[] = [];
}
