import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Dishes } from '../Dishes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private URL = '/api/dishes';
  constructor(private http: HttpClient) {
  }
  getDishes(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(`${this.URL}`, httpOptions);
  }
  getDish(id: string): Observable<Dishes> {
    return this.http.get<Dishes>(`${this.URL}/${id}`);
  }
}
