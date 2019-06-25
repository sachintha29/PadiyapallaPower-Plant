import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualyComponent } from './annualy.component';

describe('AnnualyComponent', () => {
  let component: AnnualyComponent;
  let fixture: ComponentFixture<AnnualyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
