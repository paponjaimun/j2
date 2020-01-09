import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditnewsapprovePage } from './editnewsapprove.page';

describe('EditnewsapprovePage', () => {
  let component: EditnewsapprovePage;
  let fixture: ComponentFixture<EditnewsapprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnewsapprovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditnewsapprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
