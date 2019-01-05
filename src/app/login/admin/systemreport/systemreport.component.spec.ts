import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemreportComponent } from './systemreport.component';

describe('SystemreportComponent', () => {
  let component: SystemreportComponent;
  let fixture: ComponentFixture<SystemreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
