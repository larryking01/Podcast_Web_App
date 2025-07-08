import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlaylists } from './admin-playlists';

describe('AdminPlaylists', () => {
  let component: AdminPlaylists;
  let fixture: ComponentFixture<AdminPlaylists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPlaylists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPlaylists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
