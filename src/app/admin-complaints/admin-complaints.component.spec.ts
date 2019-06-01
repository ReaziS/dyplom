import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComplaintsComponent } from './admin-complaints.component';

describe('AdminComplaintsComponent', () => {
  let component: AdminComplaintsComponent;
  let fixture: ComponentFixture<AdminComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
