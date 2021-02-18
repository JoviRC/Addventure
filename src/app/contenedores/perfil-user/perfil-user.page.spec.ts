import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilUserPage } from './perfil-user.page';

describe('PerfilUserPage', () => {
  let component: PerfilUserPage;
  let fixture: ComponentFixture<PerfilUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
