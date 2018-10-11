import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showBodyFat = true;
  toggleClass: string;

  constructor(public entriesSvc: WeightEntriesService) {}

  ngOnInit() {
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

}
