import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobulleEffectLineComponent } from './infobulle-effect-line.component';

describe('InfobulleEffectLineComponent', () => {
  let component: InfobulleEffectLineComponent;
  let fixture: ComponentFixture<InfobulleEffectLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfobulleEffectLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobulleEffectLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
