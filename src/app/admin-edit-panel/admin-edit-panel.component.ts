import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-admin-edit-panel',
  templateUrl: './admin-edit-panel.component.html',
  styleUrls: ['./admin-edit-panel.component.css']
})
export class AdminEditPanelComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
