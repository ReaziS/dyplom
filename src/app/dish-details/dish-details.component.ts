import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dishes } from '../Dishes';
import { DishesService } from '../services/dishes.service';
import { Location } from '@angular/common';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  public counter = 1;
  dish: Dishes;
  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private location: Location
) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishesService.getDish(id)
    .subscribe(dish => this.dish = dish);
  }
  goBack() {
    this.location.back();
  }
  increaseCounter(): void {
    this.counter++;
  }
  decreaseCounter(): void {
    this.counter--;
    if (this.counter < 1 ) {
      this.counter = 1;
    }
  }
  addToCard(dish: string): void {

  }
}
