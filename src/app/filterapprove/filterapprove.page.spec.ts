import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterapprovePage } from './filterapprove.page';

describe('FilterapprovePage', () => {
  let component: FilterapprovePage;
  let fixture: ComponentFixture<FilterapprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterapprovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterapprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
