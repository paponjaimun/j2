import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproveNewsPage } from './approve-news.page';

describe('ApproveNewsPage', () => {
  let component: ApproveNewsPage;
  let fixture: ComponentFixture<ApproveNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
