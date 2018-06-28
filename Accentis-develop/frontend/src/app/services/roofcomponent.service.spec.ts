import { TestBed, inject } from '@angular/core/testing';

import { RoofcomponentService } from './roofcomponent.service';

describe('RoofcomponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoofcomponentService]
    });
  });

  it('should be created', inject([RoofcomponentService], (service: RoofcomponentService) => {
    expect(service).toBeTruthy();
  }));
});
