import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTwoComponent } from './machine-two.component';

describe('MachineTwoComponent', () => {
  let component: MachineTwoComponent;
  let fixture: ComponentFixture<MachineTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
