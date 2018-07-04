import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofComponentsComponent } from './roof-components.component';

describe('RoofComponentsComponent', () => {
  let component: RoofComponentsComponent;
  let fixture: ComponentFixture<RoofComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
