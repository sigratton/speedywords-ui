import { TestBed, inject } from '@angular/core/testing';

import { SpeedywordsApiService } from './speedywords-api.service';

describe('SpeedywordsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedywordsApiService]
    });
  });

  it('should be created', inject([SpeedywordsApiService], (service: SpeedywordsApiService) => {
    expect(service).toBeTruthy();
  }));
});
