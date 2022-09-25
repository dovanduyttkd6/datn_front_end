import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelFormDataComponent } from './label-form-data.component';

describe('LabelFormDataComponent', () => {
  let component: LabelFormDataComponent;
  let fixture: ComponentFixture<LabelFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
