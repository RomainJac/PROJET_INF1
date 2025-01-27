// infobulle-description.component.ts
import { Component, Input } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-infobulle-description',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './infobulle-description.component.html',
  styleUrls: ['./infobulle-description.component.css']
})
export class InfobulleDescriptionComponent {
  @Input() description?: string;
}
