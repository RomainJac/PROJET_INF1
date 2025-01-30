import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobulleWeaponEffectLineComponent } from './infobulle-weapon-effect-line.component';

describe('InfobulleWeaponEffectLineComponent', () => {
  let component: InfobulleWeaponEffectLineComponent;
  let fixture: ComponentFixture<InfobulleWeaponEffectLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfobulleWeaponEffectLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobulleWeaponEffectLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
