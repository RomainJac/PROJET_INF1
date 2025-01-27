import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobulleConditionComponent } from './infobulle-condition.component';

describe('InfobulleConditionComponent', () => {
  let component: InfobulleConditionComponent;
  let fixture: ComponentFixture<InfobulleConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfobulleConditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobulleConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
