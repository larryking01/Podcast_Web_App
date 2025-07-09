import { TestBed } from '@angular/core/testing';

import { ErrorHanlder } from './error-hanlder';

describe('ErrorHanlder', () => {
  let service: ErrorHanlder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHanlder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
