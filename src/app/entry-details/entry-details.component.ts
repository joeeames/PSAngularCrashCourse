import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';

@Component({
  selector: 'hm-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  data: any;

  constructor(public entryService: WeightEntriesService) {
  }

  ngOnInit() {
    this.entryService.entries.subscribe((d:Entry[]) => {
      this.data = d.sort((a, b) => {
        // let da = new Date(a.date);
        // const db = new Date(b.date);
        if(a.date > b.date) {
          return 1;
        } else if (a.date.getTime() == b.date.getTime()) {
          return 0;
        } else {
          return -1
        }
      })
    })
  }

}
