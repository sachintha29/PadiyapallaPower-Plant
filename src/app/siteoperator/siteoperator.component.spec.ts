import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteoperatorComponent } from './siteoperator.component';

describe('SiteoperatorComponent', () => {
  let component: SiteoperatorComponent;
  let fixture: ComponentFixture<SiteoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
