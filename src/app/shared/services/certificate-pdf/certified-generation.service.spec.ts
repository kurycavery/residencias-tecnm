import { TestBed } from '@angular/core/testing';

import { CertifiedGenerationService } from './certified-generation.service';

describe('CertifiedGenerationService', () => {
  let service: CertifiedGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertifiedGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
