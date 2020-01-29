import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { REMOTE_URL } from '../../app/serverURL.js';
@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private ingredientUrl =  REMOTE_URL ? `${REMOTE_URL}/ingredients` : '/ingredients';
  constructor(private http: HttpClient) { }
  getIngredient(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientUrl);
  }
}
