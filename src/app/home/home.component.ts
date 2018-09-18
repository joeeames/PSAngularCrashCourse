import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model;

  constructor(public entries: WeightEntriesService) { 
    this.model = {
      weight:null,
      bodyfat:null,
      date:new Date().toLocaleDateString()
    }
  }

  ngOnInit() {

  }

  newEntry() {
    console.log('here')
    this.entries.addEntry(this.model)
  }
}
