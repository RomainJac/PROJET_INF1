import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSearchPageComponent } from './item-search-page.component';

describe('ItemSearchPageComponent', () => {
  let component: ItemSearchPageComponent;
  let fixture: ComponentFixture<ItemSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSearchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
