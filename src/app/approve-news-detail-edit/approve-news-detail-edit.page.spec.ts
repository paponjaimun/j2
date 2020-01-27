import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproveNewsDetailEditPage } from './approve-news-detail-edit.page';

describe('ApproveNewsDetailEditPage', () => {
  let component: ApproveNewsDetailEditPage;
  let fixture: ComponentFixture<ApproveNewsDetailEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveNewsDetailEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveNewsDetailEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
