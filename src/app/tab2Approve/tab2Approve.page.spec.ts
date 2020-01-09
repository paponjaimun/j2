import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2ApprovePage } from './tab2Approve.page';

describe('Tab2Page', () => {
  let component: Tab2ApprovePage;
  let fixture: ComponentFixture<Tab2ApprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2ApprovePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2ApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
