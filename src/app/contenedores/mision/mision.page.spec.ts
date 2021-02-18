import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisionPage } from './mision.page';

describe('MisionPage', () => {
  let component: MisionPage;
  let fixture: ComponentFixture<MisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
