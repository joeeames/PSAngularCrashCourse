import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';

@Component({
  selector: 'hm-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  data: any;

  constructor(public entries: WeightEntriesService) {
    this.entries.data.subscribe((d:[]) => {
      this.data = d.sort((a, b) => {
        let da = new Date(a.date);
        const db = new Date(b.date);
        if(da > db) {
          return 1;
        } else if (da == db) {
          return 0;
        } else {
          return -1
        }
          
      })
    })
  }

  ngOnInit() {
    
  }

}
