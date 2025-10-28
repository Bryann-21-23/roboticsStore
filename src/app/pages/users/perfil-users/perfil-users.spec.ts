import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsers } from './perfil-users';

describe('PerfilUsers', () => {
  let component: PerfilUsers;
  let fixture: ComponentFixture<PerfilUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
