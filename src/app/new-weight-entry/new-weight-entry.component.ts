import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {

  constructor(public entries: WeightEntriesService) { 
  }
  ngOnInit() {
  }

  createEntry() {
    this.entries.addEntry({id:-1,date: new Date('1/15/1996'), weight:110, bodyfat:0.35})
  }

}
