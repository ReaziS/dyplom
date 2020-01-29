import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REMOTE_URL } from '../../app/serverURL.js';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {
  private url =  REMOTE_URL ? `${REMOTE_URL}/userOrder` : '/userOrder';
  constructor(private http: HttpClient) { }
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.url, httpOptions);
  }
  sendUserOrder(userOrder: any): Observable<any> {
    console.log(userOrder);
    return this.http.post<any>(this.url, userOrder, httpOptions);
  }
  deleteOrder(id: string): any {
    console.log(id);
    const url = `${this.url}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
