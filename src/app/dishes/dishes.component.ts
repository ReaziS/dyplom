import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { Dishes } from '../Dishes';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor(private dishesService: DishesService) { }
  dishes: Dishes[];
  ngOnInit() {
    this.getDishes();
  }
  getDishes(): void {
    this.dishesService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
}
