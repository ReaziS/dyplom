import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private ingredientUrl = '/api/ingredients';
  constructor(private http: HttpClient) { }
  getIngredient(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientUrl);
  }
}
