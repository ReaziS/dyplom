import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }
  public locationCount;
  public currentLocation;
  public locationLastChild;
  ngOnInit() {
    this.locationCount = this.route.snapshot.url.slice().length;
    this.locationLastChild = this.route.snapshot.url.slice(this.locationCount - 1);
    this.currentLocation = this.locationLastChild[0].path;


  }
  goMain(): void {
    this.router.navigate(['/admin']);
  }
  goBack(): void {
    this.location.back();
  }
}
