import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExcelManagementComponent } from './import-excel-management.component';

describe('ImportExcelManagementComponent', () => {
  let component: ImportExcelManagementComponent;
  let fixture: ComponentFixture<ImportExcelManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportExcelManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExcelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
