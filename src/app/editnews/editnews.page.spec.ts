import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditnewsPage } from './editnews.page';

describe('EditnewsPage', () => {
  let component: EditnewsPage;
  let fixture: ComponentFixture<EditnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
