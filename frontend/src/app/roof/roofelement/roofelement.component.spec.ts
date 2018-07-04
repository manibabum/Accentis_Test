import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofelementComponent } from './roofelement.component';

describe('RoofelementComponent', () => {
  let component: RoofelementComponent;
  let fixture: ComponentFixture<RoofelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
