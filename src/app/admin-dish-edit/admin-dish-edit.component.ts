import { Component, OnInit } from '@angular/core';
import { Dishes } from '../Dishes';
import { DishesService } from '../services/dishes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-dish-edit',
  templateUrl: './admin-dish-edit.component.html',
  styleUrls: ['./admin-dish-edit.component.css']
})
export class AdminDishEditComponent implements OnInit {
  constructor(private dishesService: DishesService, private location: Location) { }
  dishes: Dishes[];
  ngOnInit() {
    this.getDishes();
  }
  getDishes(): void {
    this.dishesService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
  goBack(): void {
    this.location.back();
  }
  deleteDish(id: string): void {
    console.log(id);
    this.dishesService.deleteDish(id).subscribe( _ => {
      this.getDishes();
    });
  }
}
