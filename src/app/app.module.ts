import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminEditPanelComponent } from './admin-edit-panel/admin-edit-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { ListOfRequestsComponent } from './list-of-requests/list-of-requests.component';
import { RequestsComponent } from './requests/requests.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DishesComponent } from './dishes/dishes.component';
import { BasketComponent } from './basket/basket.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { CardPanelComponent } from './card-panel/card-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AdminEditPanelComponent,
    AdminPanelComponent,
    EmployeeDetailsComponent,
    EmployeesComponent,
    HeaderNavigationComponent,
    ListOfRequestsComponent,
    RequestsComponent,
    DishesComponent,
    BasketComponent,
    DishDetailsComponent,
    CardPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
