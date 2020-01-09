import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailnewsApprovePage } from './detailnews-approve.page';

describe('DetailnewsApprovePage', () => {
  let component: DetailnewsApprovePage;
  let fixture: ComponentFixture<DetailnewsApprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailnewsApprovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailnewsApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
