import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUsers } from './header-users';

describe('HeaderUsers', () => {
  let component: HeaderUsers;
  let fixture: ComponentFixture<HeaderUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
