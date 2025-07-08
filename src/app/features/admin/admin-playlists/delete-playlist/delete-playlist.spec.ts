import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlaylist } from './delete-playlist';

describe('DeletePlaylist', () => {
  let component: DeletePlaylist;
  let fixture: ComponentFixture<DeletePlaylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePlaylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePlaylist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
