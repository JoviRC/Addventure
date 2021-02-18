import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GOneLvTwoPage } from './g-one-lv-two.page';

describe('GOneLvTwoPage', () => {
  let component: GOneLvTwoPage;
  let fixture: ComponentFixture<GOneLvTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOneLvTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GOneLvTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
