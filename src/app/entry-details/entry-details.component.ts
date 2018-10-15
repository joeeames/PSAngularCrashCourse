import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';

@Component({
  selector: 'hm-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  entry: Entry;
  
  constructor(public entriesSvc: WeightEntriesService) { }

  ngOnInit() {
    let id = 1
    this.entriesSvc.getEntries();
    this.entriesSvc.sortedEntries$.subscribe(entries => {
      this.entry = entries.find(e => {
        return e.id === id;
      })
      console.log('entry', this.entry);
    })
  }

}
