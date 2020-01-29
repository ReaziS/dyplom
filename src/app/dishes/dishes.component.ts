import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { Dishes } from '../Dishes';
import { CheckboxItem } from '../checkbox-group/CheckboxItem';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishesComponent implements OnInit {
  public dishFilter = [
    { id: 1, name: 'pizza', russianName: 'Пицца'},
    { id: 2, name: 'sushi', russianName: 'Суши'},
    { id: 3, name: 'firstCourse', russianName: 'Первое' },
    { id: 4, name: 'secondCourse', russianName: 'Второе' },
    { id: 5, name: 'beer', russianName: 'Пиво' }
  ];
  public displayedDishes;
  public dishOptions = new Array<any>();
  constructor(private dishesService: DishesService, private cdr: ChangeDetectorRef) { }
  dishes: Dishes[];
  ngOnInit() {
    this.dishOptions = this.dishFilter.map(x => new CheckboxItem(x.id, x.name, false, x.russianName));
    this.getDishes();
    this.cdr.detectChanges();
  }
  getDishes(): void {
    this.dishesService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
      this.displayedDishes = this.dishes;
      this.cdr.markForCheck();
    });
  }
  onItemsChecked(selectedValues) {
    if (!selectedValues || selectedValues.length === 0) {
      this.displayedDishes = this.dishes;
    } else {
      this.displayedDishes = [];
      this.dishes.forEach((dish) => {
         return selectedValues.forEach((type) => {
          if (dish.type === type) {
            this.displayedDishes.push(dish);
          }
        });
      });
    }
    this.cdr.markForCheck();
  }
}
