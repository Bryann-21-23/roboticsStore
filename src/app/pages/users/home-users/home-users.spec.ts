import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsers } from './home-users';

describe('HomeUsers', () => {
  let component: HomeUsers;
  let fixture: ComponentFixture<HomeUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
