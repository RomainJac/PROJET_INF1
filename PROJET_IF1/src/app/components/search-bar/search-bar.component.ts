import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Rechercher...';
  @Output() search = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }
}
