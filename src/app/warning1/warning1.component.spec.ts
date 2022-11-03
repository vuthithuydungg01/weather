import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warning1Component } from './warning1.component';

describe('Warning1Component', () => {
  let component: Warning1Component;
  let fixture: ComponentFixture<Warning1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Warning1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Warning1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
