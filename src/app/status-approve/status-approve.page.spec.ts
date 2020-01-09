import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusApprovePage } from './status-approve.page';

describe('StatusApprovePage', () => {
  let component: StatusApprovePage;
  let fixture: ComponentFixture<StatusApprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusApprovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
