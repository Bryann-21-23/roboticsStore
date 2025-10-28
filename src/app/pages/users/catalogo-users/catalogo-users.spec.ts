import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoUsers } from './catalogo-users';

describe('CatalogoUsers', () => {
  let component: CatalogoUsers;
  let fixture: ComponentFixture<CatalogoUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
