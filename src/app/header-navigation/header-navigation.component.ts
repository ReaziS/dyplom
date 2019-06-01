import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  public yourRole;
  ngOnInit() {
    this.getRole();
  }
  logOut() {
    this.loginService.logOut();
    this.yourRole = undefined;
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
  getRole() {
    this.yourRole = this.loginService.getRole();
  }
}
