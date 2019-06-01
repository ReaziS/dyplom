import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = '/api/employees';
  private employeeRegisterUrl = this.employeeUrl + '/account' ;
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl).pipe(
    catchError(this.handleError<Employee[]>('getEmployee', []))
    );
  }
  getEmployee(id: string): Observable<Employee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
    catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }
  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    const updateUrl = `${this.employeeUrl}/${id}`;
    return this.http.put<Employee>(updateUrl, employee, httpOptions);
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee, httpOptions).pipe(
      catchError(this.handleError<Employee>('add employee'))
    );
  }
  deleteEmployee(id: string): any {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.delete(url).pipe(
      tap(() => console.log(`Employee ${id} удален`)),
      catchError(this.handleError<any>('delete Employee'))
    );
  }













  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
