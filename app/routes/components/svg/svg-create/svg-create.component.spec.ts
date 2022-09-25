import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCreateComponent } from './svg-create.component';

describe('SvgCreateComponent', () => {
  let component: SvgCreateComponent;
  let fixture: ComponentFixture<SvgCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
