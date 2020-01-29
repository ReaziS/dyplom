import { Component, OnInit } from '@angular/core';
import { UserOrderService } from '../services/user-order.service';
@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  userOrders: any[];
  public clicked = false;
  public orderTotalCost;
  constructor(private userOrderService: UserOrderService) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders(): void {
    this.userOrderService.getOrders().subscribe(userOrders => {
      this.userOrders = userOrders;
      console.log(this.userOrders);
    });
  }
  showUserInfo(): void {
    if (this.clicked) {
      this.clicked = false;
    } else {
      this.clicked = true;
    }
  }
  deleteOrder(id: string): void {
    this.userOrderService.deleteOrder(id).subscribe(_ => this.getOrders());
  }

}
