import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofdetailComponent } from './roofdetail.component';

describe('RoofdetailComponent', () => {
  let component: RoofdetailComponent;
  let fixture: ComponentFixture<RoofdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
