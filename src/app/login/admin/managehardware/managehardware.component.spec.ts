import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehardwareComponent } from './managehardware.component';

describe('ManagehardwareComponent', () => {
  let component: ManagehardwareComponent;
  let fixture: ComponentFixture<ManagehardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagehardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
