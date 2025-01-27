import { Component } from '@angular/core';
import {PageTemplateComponent} from "../page-template/page-template.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    PageTemplateComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
