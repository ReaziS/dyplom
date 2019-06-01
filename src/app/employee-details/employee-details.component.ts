import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  public userRole;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
) { }

  ngOnInit() {
    if (localStorage.getItem('role')) {
      this.userRole = localStorage.getItem('role');
    }
    this.getEmployee();
  }
  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee);
  }
  updateEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.updateEmployee(id, this.employee)
     .subscribe(() => this.goBack());
  }
  goBack() {
    this.location.back();
  }
}
