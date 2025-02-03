import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFavoriteButtonComponent } from './item-favorite-button.component';

describe('ItemFavoriteButtonComponent', () => {
  let component: ItemFavoriteButtonComponent;
  let fixture: ComponentFixture<ItemFavoriteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemFavoriteButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
