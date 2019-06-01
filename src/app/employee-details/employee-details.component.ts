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
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee);
  }
  goBack() {
    this.location.back();
  }
}
