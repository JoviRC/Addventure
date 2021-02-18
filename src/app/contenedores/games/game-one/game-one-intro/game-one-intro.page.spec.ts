import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameOneIntroPage } from './game-one-intro.page';

describe('GameOneIntroPage', () => {
  let component: GameOneIntroPage;
  let fixture: ComponentFixture<GameOneIntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOneIntroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameOneIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
