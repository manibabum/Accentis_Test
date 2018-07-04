import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingtypeComponent } from './buildingtype.component';

describe('BuildingtypeComponent', () => {
  let component: BuildingtypeComponent;
  let fixture: ComponentFixture<BuildingtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
