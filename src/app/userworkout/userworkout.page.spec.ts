import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserworkoutPage } from './userworkout.page';

describe('UserworkoutPage', () => {
  let component: UserworkoutPage;
  let fixture: ComponentFixture<UserworkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserworkoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserworkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
