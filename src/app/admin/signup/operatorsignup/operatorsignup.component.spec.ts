import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsignupComponent } from './operatorsignup.component';

describe('OperatorsignupComponent', () => {
  let component: OperatorsignupComponent;
  let fixture: ComponentFixture<OperatorsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
