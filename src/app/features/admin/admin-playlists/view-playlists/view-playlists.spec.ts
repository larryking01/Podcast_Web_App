import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaylists } from './view-playlists';

describe('ViewPlaylists', () => {
  let component: ViewPlaylists;
  let fixture: ComponentFixture<ViewPlaylists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPlaylists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPlaylists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
