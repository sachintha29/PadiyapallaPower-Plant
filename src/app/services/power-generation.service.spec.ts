import { TestBed } from '@angular/core/testing';

import { PowerGenerationService } from './power-generation.service';

describe('PowerGenerationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PowerGenerationService = TestBed.get(PowerGenerationService);
    expect(service).toBeTruthy();
  });
});
