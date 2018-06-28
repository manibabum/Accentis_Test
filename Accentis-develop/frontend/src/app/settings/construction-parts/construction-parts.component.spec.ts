import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionPartsComponent } from './construction-parts.component';

describe('ConstructionPartsComponent', () => {
  let component: ConstructionPartsComponent;
  let fixture: ComponentFixture<ConstructionPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
