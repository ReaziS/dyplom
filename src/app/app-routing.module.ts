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

const routes: Routes = [
  {path: 'employee', component: EmployeesComponent, canActivate: [AuthGuard]},
  {path: 'details/:id', component: EmployeeDetailsComponent},
  {path: 'login' , component: AdminPanelComponent},
  {path: 'admin', component: AdminEditPanelComponent, canActivate: [AdminGuard]},
  {path: 'add', component: AddEmployeeComponent},
  {path: 'complain/:id', component: RequestsComponent},
  {path: 'listofrequests', component: ListOfRequestsComponent},
  {path: 'dishes', component: DishesComponent},
  {path: 'dishDetails/:id', component: DishDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
