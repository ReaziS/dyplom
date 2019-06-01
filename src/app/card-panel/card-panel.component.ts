import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Dishes } from '../Dishes';
@Component({
  selector: 'app-card-panel',
  templateUrl: './card-panel.component.html',
  styleUrls: ['./card-panel.component.css']
})
export class CardPanelComponent implements OnInit {
  @Input() dish: Dishes;
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
