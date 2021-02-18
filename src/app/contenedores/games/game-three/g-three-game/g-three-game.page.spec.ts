import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GThreeGamePage } from './g-three-game.page';

describe('GThreeGamePage', () => {
  let component: GThreeGamePage;
  let fixture: ComponentFixture<GThreeGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GThreeGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GThreeGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
