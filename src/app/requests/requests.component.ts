import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Location } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  private ifSuccess = false;
  private clicked = false;
  employee: Employee;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private requestService: RequestService
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
  onComplain() {
    // localStorage.setItem('onComplain', 'true');
    this.ifSuccess = true;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.requestService.sendClientRequest(form.value).subscribe(_ => this.afterSubmit());
  }
  afterSubmit() {
    this.clicked = true;
    this.goBack();
  }
}
