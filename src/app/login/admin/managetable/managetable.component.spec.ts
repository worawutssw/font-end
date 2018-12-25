import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetableComponent } from './managetable.component';

describe('ManagetableComponent', () => {
  let component: ManagetableComponent;
  let fixture: ComponentFixture<ManagetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
