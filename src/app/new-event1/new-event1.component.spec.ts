import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEvent1Component } from './new-event1.component';

describe('NewEvent1Component', () => {
  let component: NewEvent1Component;
  let fixture: ComponentFixture<NewEvent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEvent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEvent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
