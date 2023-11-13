import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeVerificationComponent } from './age-verification.component';

describe('AgeVerificationComponent', () => {
  let component: AgeVerificationComponent;
  let fixture: ComponentFixture<AgeVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeVerificationComponent]
    });
    fixture = TestBed.createComponent(AgeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
