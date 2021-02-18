import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameModePage } from './game-mode.page';

describe('GameModePage', () => {
  let component: GameModePage;
  let fixture: ComponentFixture<GameModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
