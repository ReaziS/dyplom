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
  public userRole;
  public counter = 1;
  dish: Dishes;
  public basket: Array<Dishes> = [];
  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private location: Location
) { }

  ngOnInit() {
    if (localStorage.getItem('role')) {
      this.userRole = localStorage.getItem('role');
    }
    this.getDish();
  }
  getDish(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishesService.getDish(id)
    .subscribe(dish => this.dish = dish);
  }
  updateDish(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishesService.updateDish(id, this.dish)
     .subscribe(() => this.goBack());
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
  addToCard(): void {
    console.log(this.basket);
    console.log(this.dish);
    if (localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket')) as Array<Dishes>;
        for (let i = 0; i < this.counter; i++) {
          this.basket.push(this.dish);
        }
        localStorage.removeItem('basket');
        localStorage.setItem('basket', JSON.stringify(this.basket));
    } else {
      for (let i = 0; i < this.counter; i++) {
        this.basket.push(this.dish);
      }
      localStorage.setItem('basket', JSON.stringify(this.basket));
    }
  }
}
