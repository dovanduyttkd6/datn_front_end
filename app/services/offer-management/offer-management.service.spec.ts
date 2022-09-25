import { TestBed } from '@angular/core/testing';

import { OfferManagementService } from './offer-management.service';

describe('OfferManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferManagementService = TestBed.get(OfferManagementService);
    expect(service).toBeTruthy();
  });
});
