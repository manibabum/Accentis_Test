import { TestBed, inject } from '@angular/core/testing';

import { ConstructionpartsService } from './constructionparts.service';

describe('ConstructionpartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstructionpartsService]
    });
  });

  it('should be created', inject([ConstructionpartsService], (service: ConstructionpartsService) => {
    expect(service).toBeTruthy();
  }));
});
