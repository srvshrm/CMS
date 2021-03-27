import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactUsComponent } from './new-contact-us.component';

describe('NewContactUsComponent', () => {
  let component: NewContactUsComponent;
  let fixture: ComponentFixture<NewContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
