import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMobileComponent } from './input-mobile.component';

describe('InputMobileComponent', () => {
  let component: InputMobileComponent;
  let fixture: ComponentFixture<InputMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
