import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfobulleComponent } from './item-infobulle.component';

describe('ItemInfobulleComponent', () => {
  let component: ItemInfobulleComponent;
  let fixture: ComponentFixture<ItemInfobulleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemInfobulleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInfobulleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
