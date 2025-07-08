import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confessions } from './confessions';

describe('Confessions', () => {
  let component: Confessions;
  let fixture: ComponentFixture<Confessions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confessions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confessions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
