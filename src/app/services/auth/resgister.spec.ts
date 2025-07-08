import { TestBed } from '@angular/core/testing';

import { Resgister } from './resgister';

describe('Resgister', () => {
  let service: Resgister;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Resgister);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
