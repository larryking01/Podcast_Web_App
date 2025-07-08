import { TestBed } from '@angular/core/testing';

import { Playlists } from './playlists';

describe('Playlists', () => {
  let service: Playlists;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Playlists);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
