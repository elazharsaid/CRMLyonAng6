import { TestBed } from '@angular/core/testing';

import { PresationResolverService } from './presation-resolver.service';

describe('PresationResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresationResolverService = TestBed.get(PresationResolverService);
    expect(service).toBeTruthy();
  });
});
