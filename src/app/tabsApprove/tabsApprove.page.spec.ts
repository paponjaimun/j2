import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsApprovePage } from './tabsApprove.page';

describe('TabsApprovePage', () => {
  let component: TabsApprovePage;
  let fixture: ComponentFixture<TabsApprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsApprovePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
