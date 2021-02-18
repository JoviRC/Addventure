import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GTwoLvThreePage } from './g-two-lv-three.page';

describe('GTwoLvThreePage', () => {
  let component: GTwoLvThreePage;
  let fixture: ComponentFixture<GTwoLvThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GTwoLvThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GTwoLvThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
