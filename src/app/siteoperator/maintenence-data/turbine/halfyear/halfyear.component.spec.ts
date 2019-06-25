import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfyearComponent } from './halfyear.component';

describe('HalfyearComponent', () => {
  let component: HalfyearComponent;
  let fixture: ComponentFixture<HalfyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
