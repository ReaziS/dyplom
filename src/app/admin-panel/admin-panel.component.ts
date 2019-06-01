import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Form, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public loginForm;
  private loginUserData;
  public yourRole;
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.getRole();
  }
  getRole() {
    this.yourRole = this.loginService.getRole();
  }
  // https://github.com/Van-jay/Ivan_Antimonik/blob/73cb77a3190359cef9e0e9ff2dc01c085aec4b0a/src/app/guards/auth.guard.ts
  onSubmit(form: NgForm) {
    this.loginUserData = form.value;
    this.loginService.loginUser(this.loginUserData)
      .subscribe(res => {
        localStorage.setItem('token', res['token']);
        this.loginService.checkRole().subscribe(data => {
          localStorage.setItem('role', data['yourRole']);
          this.yourRole = localStorage.getItem('role');
          if (this.yourRole === 'admin') {
            this.router.navigate(['/admin']);
          }
        });
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.log('wrong data');
            }
          }
        });
  }
}
