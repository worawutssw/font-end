import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerooomComponent } from './managerooom.component';

describe('ManagerooomComponent', () => {
  let component: ManagerooomComponent;
  let fixture: ComponentFixture<ManagerooomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerooomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerooomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
