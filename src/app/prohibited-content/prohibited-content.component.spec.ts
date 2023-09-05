import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedContentComponent } from './prohibited-content.component';

describe('ProhibitedContentComponent', () => {
  let component: ProhibitedContentComponent;
  let fixture: ComponentFixture<ProhibitedContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProhibitedContentComponent]
    });
    fixture = TestBed.createComponent(ProhibitedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
