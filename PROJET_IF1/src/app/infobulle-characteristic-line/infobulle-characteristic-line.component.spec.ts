import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobulleCharacteristicLineComponent } from './infobulle-characteristic-line.component';

describe('InfobulleCharacteristicLineComponent', () => {
  let component: InfobulleCharacteristicLineComponent;
  let fixture: ComponentFixture<InfobulleCharacteristicLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfobulleCharacteristicLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobulleCharacteristicLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
