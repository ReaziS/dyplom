import { Component, OnInit } from '@angular/core';
import { SubmitForm } from '../submitForm';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-admin-complaints',
  templateUrl: './admin-complaints.component.html',
  styleUrls: ['./admin-complaints.component.css']
})
export class AdminComplaintsComponent implements OnInit {

  submitForm: SubmitForm[];
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getRequests();
  }
  getRequests() {
    this.requestService.getRequests().subscribe(submitForm => this.submitForm = submitForm);
  }
  deleteRequest(id: string) {
    this.requestService.deleteRequest(id).subscribe(_ => this.getRequests());
  }

}
