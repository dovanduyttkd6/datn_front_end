import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUploadFileComponent } from './svg-upload-file.component';

describe('SvgUploadFileComponent', () => {
  let component: SvgUploadFileComponent;
  let fixture: ComponentFixture<SvgUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
