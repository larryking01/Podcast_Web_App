import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfessions } from './admin-confessions';

describe('AdminConfessions', () => {
  let component: AdminConfessions;
  let fixture: ComponentFixture<AdminConfessions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminConfessions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConfessions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
