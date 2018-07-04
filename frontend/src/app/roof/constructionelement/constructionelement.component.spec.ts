import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionelementComponent } from './constructionelement.component';

describe('ConstructionelementComponent', () => {
  let component: ConstructionelementComponent;
  let fixture: ComponentFixture<ConstructionelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
