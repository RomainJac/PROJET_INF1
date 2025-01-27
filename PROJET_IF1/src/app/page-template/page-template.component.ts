import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-template',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.css'
})
export class PageTemplateComponent { }
