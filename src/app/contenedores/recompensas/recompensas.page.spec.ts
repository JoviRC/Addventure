import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecompensasPage } from './recompensas.page';

describe('RecompensasPage', () => {
  let component: RecompensasPage;
  let fixture: ComponentFixture<RecompensasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompensasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecompensasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
