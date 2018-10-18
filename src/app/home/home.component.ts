import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBodyFat = true;
  entries: Entry[];

  constructor(public entriesSvc: WeightEntriesService) { }

  ngOnInit() {
    this.updateData();
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  updateData() {
    this.entriesSvc.getEntries().subscribe(entries => {
      this.entries = entries;
    })
  }

  createNewEntry(entry: Entry) {
    this.entriesSvc.addEntry(entry).subscribe(() => {
      this.updateData();
    });
  }
}
