import { Component } from '@angular/core';
import {PageTemplateComponent} from "../page-template/page-template.component";

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [
    PageTemplateComponent
  ],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.css'
})
export class PrivacyPolicyPageComponent {

}
