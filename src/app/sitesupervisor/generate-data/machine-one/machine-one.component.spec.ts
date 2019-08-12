import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineOneComponent } from './machine-one.component';

describe('MachineOneComponent', () => {
  let component: MachineOneComponent;
  let fixture: ComponentFixture<MachineOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
