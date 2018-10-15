import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hm-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  entry: Entry;

  constructor(private entriesSvc: WeightEntriesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params.id;
    this.entriesSvc.getEntries();
    this.entriesSvc.sortedEntries$.subscribe(entries => {
      this.entry = entries.find(e => {
        return e.id === id;
      })
    })
  }

}
