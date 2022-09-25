import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberAdvancedComponent } from './input-number-advanced.component';

describe('InputNumberAdvancedComponent', () => {
  let component: InputNumberAdvancedComponent;
  let fixture: ComponentFixture<InputNumberAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNumberAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
