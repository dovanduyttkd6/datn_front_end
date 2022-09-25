import { TestBed } from '@angular/core/testing';

import { DetailRequestService } from './detail-request.service';

describe('DetailRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailRequestService = TestBed.get(DetailRequestService);
    expect(service).toBeTruthy();
  });
});
