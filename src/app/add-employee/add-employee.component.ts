import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { LoginService } from '../services/login.service';
import { Employee } from '../employee';
import { EmployeeAccountData } from '../employeeAccountData';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  private isLogined = false;
  private clicked = false;
  private id;
  public newImg;
  employees: Employee[];
  constructor(private employeeService: EmployeeService, private loginService: LoginService) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:max-line-length
  addEmployee(login: string, password: string, firstName: string, secondName: string, lastName: string, birthday: string, post: string, position: string, salaryRate: string, description: string, img: string) {
    login = login.trim();
    password = password.trim();
    firstName = firstName.trim();
    secondName = secondName.trim();
    lastName = lastName.trim();
    birthday = birthday.trim();
    post = post.trim();
    position = position.trim();
    salaryRate = salaryRate.trim();
    description = description.trim();
    img = img.trim();
    // if (!firstName || !secondName || !lastName || !birthday || !post || !position || !salaryRate || description || !img) { return; }
    // tslint:disable-next-line:max-line-length
    this.employeeService.addEmployee({firstName, secondName, lastName, birthday, post, position, salaryRate, description, img, login, password} as EmployeeAccountData)
      .subscribe(_ => { console.log('user has been registered'); });
  }

}
