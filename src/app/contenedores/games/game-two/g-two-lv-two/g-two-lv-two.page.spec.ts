import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GTwoLvTwoPage } from './g-two-lv-two.page';

describe('GTwoLvTwoPage', () => {
  let component: GTwoLvTwoPage;
  let fixture: ComponentFixture<GTwoLvTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GTwoLvTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GTwoLvTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
