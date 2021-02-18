import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GOneLvOnePage } from './g-one-lv-one.page';

describe('GOneLvOnePage', () => {
  let component: GOneLvOnePage;
  let fixture: ComponentFixture<GOneLvOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOneLvOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GOneLvOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
