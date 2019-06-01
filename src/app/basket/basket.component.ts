import { Component, OnInit, Input } from '@angular/core';
import { Dishes } from '../Dishes';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public userBasket: Array<Dishes> = [];
  public unicItem = [];
  public countOfEveryItem = [];
  public prev;
  public counter;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('basket')) {
      this.userBasket = JSON.parse(localStorage.getItem('basket')) as Array<Dishes>;

      this.userBasket.sort();
      for ( let i = 0; i < this.userBasket.length; i++ ) {
          if ( JSON.stringify(this.userBasket[i]) !== JSON.stringify(this.prev) ) {
              this.unicItem.push(this.userBasket[i]);
              this.countOfEveryItem.push(1);
          } else {
            this.countOfEveryItem[this.countOfEveryItem.length - 1]++;
          }
          this.prev = this.userBasket[i];
      }
      for ( let i = 0; i < this.unicItem.length; i++) {
        this.unicItem[i]['counter'] = this.countOfEveryItem[i];
      }
  }
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
  check(): void {
    console.log(this.userBasket);
  }

}
