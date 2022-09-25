import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgToggleColumnsComponent } from './svg-toggle-columns.component';

describe('SvgToggleColumnsComponent', () => {
  let component: SvgToggleColumnsComponent;
  let fixture: ComponentFixture<SvgToggleColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgToggleColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgToggleColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
