import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { IngredientsService } from '../services/ingredients.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent implements OnInit {

  constructor(private fb: FormBuilder, private ingredientsService: IngredientsService) { }
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

  addDish(): void {
    console.log(this.form.getRawValue());
  }
}
