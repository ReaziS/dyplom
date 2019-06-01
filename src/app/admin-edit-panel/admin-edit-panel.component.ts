import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-admin-edit-panel',
  templateUrl: './admin-edit-panel.component.html',
  styleUrls: ['./admin-edit-panel.component.css']
})
export class AdminEditPanelComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  employees: Employee[];
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }
  deleteEmployee(id: string): void {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe( _ => this.getEmployees());
  }

}
