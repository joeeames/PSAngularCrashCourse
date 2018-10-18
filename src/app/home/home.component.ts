import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';
import { Observable } from 'rxjs';

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
    this.entriesSvc.getEntries().subscribe(entries => {
      this.entries = entries;
    })
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  createNewEntry(entry: Entry) {
    this.entriesSvc.addEntry(entry).subscribe(() => {
      this.entriesSvc.getEntries().subscribe(entries => {
        this.entries = entries;
      })
    })
  }

}
