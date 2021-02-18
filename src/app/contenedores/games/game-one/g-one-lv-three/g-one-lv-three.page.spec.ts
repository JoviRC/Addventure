import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GOneLvThreePage } from './g-one-lv-three.page';

describe('GOneLvThreePage', () => {
  let component: GOneLvThreePage;
  let fixture: ComponentFixture<GOneLvThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOneLvThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GOneLvThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
