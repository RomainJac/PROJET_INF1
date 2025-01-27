import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobulleDescriptionComponent } from './infobulle-description.component';

describe('InfobulleDescriptionComponent', () => {
  let component: InfobulleDescriptionComponent;
  let fixture: ComponentFixture<InfobulleDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfobulleDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobulleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
