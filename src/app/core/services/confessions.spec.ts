import { TestBed } from '@angular/core/testing';

import { Confessions } from './confessions';

describe('Confessions', () => {
  let service: Confessions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Confessions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
