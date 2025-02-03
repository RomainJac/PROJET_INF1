import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() public placeholder: string = 'Rechercher...';
  @Output() private search = new EventEmitter<string>();

  inputValue: string = '';

  protected onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.search.emit(inputElement.value);
  }
}
