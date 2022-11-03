import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warning2Component } from './warning2.component';

describe('Warning2Component', () => {
  let component: Warning2Component;
  let fixture: ComponentFixture<Warning2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Warning2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Warning2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
