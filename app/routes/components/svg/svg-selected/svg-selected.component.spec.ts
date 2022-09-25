import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSelectedComponent } from './svg-selected.component';

describe('SvgSelectedComponent', () => {
  let component: SvgSelectedComponent;
  let fixture: ComponentFixture<SvgSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
