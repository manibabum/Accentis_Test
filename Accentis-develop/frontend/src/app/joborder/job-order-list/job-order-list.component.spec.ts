import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOrderListComponent } from './job-order-list.component';

describe('JobOrderListComponent', () => {
  let component: JobOrderListComponent;
  let fixture: ComponentFixture<JobOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
