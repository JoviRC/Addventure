import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GTwoLvOnePage } from './g-two-lv-one.page';

describe('GTwoLvOnePage', () => {
  let component: GTwoLvOnePage;
  let fixture: ComponentFixture<GTwoLvOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GTwoLvOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GTwoLvOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
