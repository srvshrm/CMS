import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGallaryComponent } from './new-gallary.component';

describe('NewGallaryComponent', () => {
  let component: NewGallaryComponent;
  let fixture: ComponentFixture<NewGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
