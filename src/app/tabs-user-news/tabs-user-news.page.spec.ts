import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsUserNewsPage } from './tabs-user-news.page';

describe('TabsUserNewsPage', () => {
  let component: TabsUserNewsPage;
  let fixture: ComponentFixture<TabsUserNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsUserNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsUserNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
