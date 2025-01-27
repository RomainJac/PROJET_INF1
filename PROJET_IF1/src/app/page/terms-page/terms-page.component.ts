import { Component } from '@angular/core';
import {PageTemplateComponent} from "../page-template/page-template.component";

@Component({
  selector: 'app-terms-page',
  standalone: true,
    imports: [
        PageTemplateComponent
    ],
  templateUrl: './terms-page.component.html',
  styleUrl: './terms-page.component.css'
})
export class TermsPageComponent {

}
