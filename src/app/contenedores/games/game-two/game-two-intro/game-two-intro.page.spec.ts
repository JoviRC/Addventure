import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameTwoIntroPage } from './game-two-intro.page';

describe('GameTwoIntroPage', () => {
  let component: GameTwoIntroPage;
  let fixture: ComponentFixture<GameTwoIntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTwoIntroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameTwoIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
