import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishEditUpdateComponent } from './admin-dish-edit-update.component';

describe('AdminDishEditUpdateComponent', () => {
  let component: AdminDishEditUpdateComponent;
  let fixture: ComponentFixture<AdminDishEditUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishEditUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishEditUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
