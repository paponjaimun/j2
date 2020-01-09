import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1ApprovePage } from './tab1Approve.page';

describe('Tab1ApprovePage', () => {
  let component: Tab1ApprovePage;
  let fixture: ComponentFixture<Tab1ApprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1ApprovePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1ApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
