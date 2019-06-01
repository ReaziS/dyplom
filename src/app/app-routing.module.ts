import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminEditPanelComponent } from './admin-edit-panel/admin-edit-panel.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RequestsComponent } from './requests/requests.component';
import { ListOfRequestsComponent } from './list-of-requests/list-of-requests.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { DishesComponent } from './dishes/dishes.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { BasketComponent } from './basket/basket.component';
import { AdminDishEditComponent } from './admin-dish-edit/admin-dish-edit.component';
import { AdminEmployeeEditComponent } from './admin-employee-edit/admin-employee-edit.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { AddDishesComponent } from './add-dishes/add-dishes.component';

const routes: Routes = [
  {path: 'employee', component: EmployeesComponent, canActivate: [AuthGuard]},
  {path: 'details/:id', component: EmployeeDetailsComponent},
  {path: 'login' , component: AdminPanelComponent},
  {path: 'admin', component: AdminEditPanelComponent, canActivate: [AdminGuard]},
  {path: 'add/employee', component: AddEmployeeComponent},
  {path: 'add/dishes', component: AddDishesComponent},
  {path: 'complain/:id', component: RequestsComponent},
  {path: 'dishes', component: DishesComponent},
  {path: 'dishDetails/:id', component: DishDetailsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'admin/complains', component: AdminComplaintsComponent, canActivate: [AdminGuard]},
  {path: 'admin/edit/dish', component: AdminDishEditComponent, canActivate: [AdminGuard]},
  {path: 'admin/edit/employee', component: AdminEmployeeEditComponent, canActivate: [AdminGuard]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
