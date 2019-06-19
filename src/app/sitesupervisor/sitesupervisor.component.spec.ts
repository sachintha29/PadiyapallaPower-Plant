import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesupervisorComponent } from './sitesupervisor.component';

describe('SitesupervisorComponent', () => {
  let component: SitesupervisorComponent;
  let fixture: ComponentFixture<SitesupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
