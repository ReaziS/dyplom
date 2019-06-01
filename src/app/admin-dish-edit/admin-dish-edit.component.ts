import { Component, OnInit } from '@angular/core';
import { Dishes } from '../Dishes';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-admin-dish-edit',
  templateUrl: './admin-dish-edit.component.html',
  styleUrls: ['./admin-dish-edit.component.css']
})
export class AdminDishEditComponent implements OnInit {
  constructor(private dishesService: DishesService) { }
  dishes: Dishes[];
  ngOnInit() {
    this.getDishes();
  }
  getDishes(): void {
    this.dishesService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
  deleteDish(id: string): void {
    this.dishesService.deleteDish(id).subscribe( _ => this.getDishes());
  }
}
