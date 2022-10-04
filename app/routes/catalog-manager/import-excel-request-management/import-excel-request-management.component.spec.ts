import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExcelRequestManagementComponent } from './import-excel-request-management.component';

describe('ImportExcelRequestManagementComponent', () => {
  let component: ImportExcelRequestManagementComponent;
  let fixture: ComponentFixture<ImportExcelRequestManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportExcelRequestManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExcelRequestManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
