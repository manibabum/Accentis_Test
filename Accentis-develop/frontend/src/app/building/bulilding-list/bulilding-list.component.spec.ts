import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulildingListComponent } from './bulilding-list.component';

describe('BulildingListComponent', () => {
  let component: BulildingListComponent;
  let fixture: ComponentFixture<BulildingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulildingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulildingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
