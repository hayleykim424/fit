import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermealPage } from './usermeal.page';

describe('UsermealPage', () => {
  let component: UsermealPage;
  let fixture: ComponentFixture<UsermealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermealPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
