import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL = '/api';

  constructor(private http: HttpClient) {
  }

  loginUser(user) {
    return this.http.post(`${this.URL}/login`, user);
  }

  logIn() {
    return !!localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
  }
  getRole() {
    if (localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'employee') {
      return localStorage.getItem('role');
    } else {
      return 'user';
    }
  }
  getToken() {
    return localStorage.getItem('token');
  }

  checkRole() {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.URL}/admin/${token}`, httpOptions);
  }
}
