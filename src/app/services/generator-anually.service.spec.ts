import { TestBed } from '@angular/core/testing';

import { GeneratorAnuallyService } from './generator-anually.service';

describe('GeneratorAnuallyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneratorAnuallyService = TestBed.get(GeneratorAnuallyService);
    expect(service).toBeTruthy();
  });
});
