import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestimonialsComponent } from './new-testimonials.component';

describe('NewTestimonialsComponent', () => {
  let component: NewTestimonialsComponent;
  let fixture: ComponentFixture<NewTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
