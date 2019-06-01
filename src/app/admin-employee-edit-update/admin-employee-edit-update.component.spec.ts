import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeEditUpdateComponent } from './admin-employee-edit-update.component';

describe('AdminEmployeeEditUpdateComponent', () => {
  let component: AdminEmployeeEditUpdateComponent;
  let fixture: ComponentFixture<AdminEmployeeEditUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeEditUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeEditUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
