import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorsignupComponent } from './supervisorsignup.component';

describe('SupervisorsignupComponent', () => {
  let component: SupervisorsignupComponent;
  let fixture: ComponentFixture<SupervisorsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
