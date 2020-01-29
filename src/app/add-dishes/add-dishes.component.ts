import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { IngredientsService } from '../services/ingredients.service';
import { Ingredient } from '../ingredient';
import { DishesService } from '../services/dishes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private ingredientsService: IngredientsService, private dishesService: DishesService, private location: Location) { }
  public form: FormGroup;
  items: FormArray;
  public ingredients: Ingredient[];

  ngOnInit() {
    this.ingredientsService.getIngredient().subscribe(ingredient => {
      console.log(ingredient);
      this.ingredients = ingredient;
    });
    this.form = this.fb.group({
      type: [''],
      dishName: [''],
      cost: [''],
      description: [''],
      img: [''],
      items: this.fb.array([ this.createItem() ])
    });
  }
  public createItem(): FormGroup {
    return this.fb.group({
      name: '',
      quantity: ''
    });
  }
  addItem(): void {
    this.items = this.form.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  getIngredients(): void {
    this.ingredientsService.getIngredient().subscribe(ingredient => this.ingredients = ingredient);
  }
goBack() {
  this.location.back();
}
  addDish(): void {
    this.dishesService.addDish(this.form.getRawValue()).subscribe(_ => this.goBack());
  }
}
