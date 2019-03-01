import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdHotObservablesComponent } from './cold-hot-observables.component';

describe('ColdHotObservablesComponent', () => {
  let component: ColdHotObservablesComponent;
  let fixture: ComponentFixture<ColdHotObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdHotObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdHotObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
