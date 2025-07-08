import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEpisodes } from './admin-episodes';

describe('AdminEpisodes', () => {
  let component: AdminEpisodes;
  let fixture: ComponentFixture<AdminEpisodes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEpisodes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEpisodes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
