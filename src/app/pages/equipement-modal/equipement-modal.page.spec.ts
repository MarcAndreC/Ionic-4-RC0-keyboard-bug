import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementModalPage } from './equipement-modal.page';

describe('EquipementModalPage', () => {
  let component: EquipementModalPage;
  let fixture: ComponentFixture<EquipementModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipementModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
