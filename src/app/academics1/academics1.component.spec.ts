import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Academics1Component } from './academics1.component';

describe('Academics1Component', () => {
  let component: Academics1Component;
  let fixture: ComponentFixture<Academics1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Academics1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Academics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
