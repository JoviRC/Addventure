import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameThreeIntroPage } from './game-three-intro.page';

describe('GameThreeIntroPage', () => {
  let component: GameThreeIntroPage;
  let fixture: ComponentFixture<GameThreeIntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameThreeIntroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameThreeIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
