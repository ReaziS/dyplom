import { Component, OnInit, Input } from '@angular/core';
import { Dishes } from '../Dishes';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  @Input() currentDish: Dishes;
  public userBasket;
  constructor() { }

  ngOnInit() {
  }
  addToBasket(): void {
    this.userBasket.push(this.currentDish);
    console.log(this.userBasket);
  }

}
