import { Component, OnInit, Input } from '@angular/core';
import { Dishes } from '../Dishes';
import { UserOrderService } from '../services/user-order.service';
import { NgForm } from '@angular/forms';
import { UserOrderItems } from '../userOrderItems';

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
  public dishTotalCost: number;
  public orderTotalCost: number;
  private ifSuccess = false;
  constructor(private userOrderService: UserOrderService) { }

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
        this.unicItem[i]['dishTotalCost'] = parseFloat(this.unicItem[i]['cost']) * +this.unicItem[i]['counter'];
      }
      this.orderTotalCost = this.unicItem.reduce((accumulator, currentValue) => accumulator + currentValue.dishTotalCost, 0);
      this.orderTotalCost = parseFloat(this.orderTotalCost.toFixed(2));
      console.log(this.orderTotalCost);
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
onOrder(): void {
  this.ifSuccess = true;
}
onSubmit(form: NgForm) {
  const dto = {
    clientName: form.value.clientName,
    streetName: form.value.streetName,
    houseNumber: form.value.houseNumber,
    flatNumber: form.value.flatNumber,
    phone: form.value.phone,
    comment: form.value.comment,
    orderTotalCost: this.orderTotalCost,
    userOrderItem: this.unicItem as UserOrderItems[]
  };
  this.userOrderService.sendUserOrder(dto).subscribe(_ => {
    console.log('object');
    localStorage.removeItem('basket');
  });
}


}
