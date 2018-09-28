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
  sortedEntries: Entry[];

  constructor(public entryService: WeightEntriesService) {
  }

  ngOnInit() {
    this.entryService.entries$.subscribe(() => {
      console.log(1)
    })
  }

}
