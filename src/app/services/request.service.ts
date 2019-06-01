import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LoginService } from './login.service';
import { SubmitForm } from '../submitForm';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class RequestService {
  private url = '/api/request';
  constructor(private http: HttpClient, private loginService: LoginService) { }
  getRequests(): Observable<SubmitForm[]> {
    if (this.loginService.getRole() !== 'user') {
      return this.http.get<SubmitForm[]>(this.url).pipe(
        catchError(this.handleError<any>('get client requests'))
      );
    } else {console.log('no permission'); }
  }
  sendClientRequest(requestDTO: any) {
    return this.http.post(this.url, JSON.stringify(requestDTO), httpOptions).pipe(
      tap(_ => console.log('request has been sent')),
      catchError(this.handleError<any>('client request'))
    );
  }
  deleteRequest(id: string): any {
    const url = `${this.url}/${id}`;
    return this.http.delete(url).pipe(
      tap(() => console.log(`Request ${id} удален`)),
      catchError(this.handleError<any>('delete request'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

