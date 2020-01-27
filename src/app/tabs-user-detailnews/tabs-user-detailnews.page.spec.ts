import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsUserDetailnewsPage } from './tabs-user-detailnews.page';

describe('TabsUserDetailnewsPage', () => {
  let component: TabsUserDetailnewsPage;
  let fixture: ComponentFixture<TabsUserDetailnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsUserDetailnewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsUserDetailnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
