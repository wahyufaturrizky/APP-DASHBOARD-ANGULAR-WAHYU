import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalistmanagementComponent } from './datalistmanagement.component';

describe('DatalistmanagementComponent', () => {
  let component: DatalistmanagementComponent;
  let fixture: ComponentFixture<DatalistmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalistmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalistmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
