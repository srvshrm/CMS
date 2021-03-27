import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNews1Component } from './new-news1.component';

describe('NewNews1Component', () => {
  let component: NewNews1Component;
  let fixture: ComponentFixture<NewNews1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNews1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNews1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
