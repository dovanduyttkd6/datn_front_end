/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputMultipleEmailComponent } from './input-multiple-email.component';

describe('InputMultipleEmailComponent', () => {
  let component: InputMultipleEmailComponent;
  let fixture: ComponentFixture<InputMultipleEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMultipleEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMultipleEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
