import { TestBed } from '@angular/core/testing';

import { AppParamsService } from './app-params.service';

describe('AppParamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppParamsService = TestBed.get(AppParamsService);
    expect(service).toBeTruthy();
  });
});
