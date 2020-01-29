import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Dishes } from '../Dishes';
import { REMOTE_URL } from '../../app/serverURL.js';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private URL =  REMOTE_URL ? `${REMOTE_URL}/dishes` : '/dishes';
  constructor(private http: HttpClient) {
  }
  getDishes(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(`${this.URL}`, httpOptions);
  }
  getDish(id: string): Observable<Dishes> {
    return this.http.get<Dishes>(`${this.URL}/${id}`);
  }
  updateDish(id: string, dish: Dishes): Observable<Dishes> {
    const updateUrl = `${this.URL}/${id}`;
    return this.http.put<Dishes>(updateUrl, dish, httpOptions);
  }
  addDish(dish: any): Observable<any> {
    return this.http.post<any>(this.URL, dish, httpOptions);
  }
  deleteDish(id: string): any {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url).pipe(
      tap(() => console.log(`Блюдо ${id} удален`))
    );
  }
}
