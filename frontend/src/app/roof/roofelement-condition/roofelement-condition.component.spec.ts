import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofelementConditionComponent } from './roofelement-condition.component';

describe('RoofelementConditionComponent', () => {
  let component: RoofelementConditionComponent;
  let fixture: ComponentFixture<RoofelementConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofelementConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofelementConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
