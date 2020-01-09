import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab3ApprovePage } from './tab3Approve.page';

describe('Tab3ApprovePage', () => {
  let component: Tab3ApprovePage;
  let fixture: ComponentFixture<Tab3ApprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3ApprovePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3ApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
