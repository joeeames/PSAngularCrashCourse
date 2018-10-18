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
  entries$: Observable<Entry[]>;
  

  constructor(public entriesSvc: WeightEntriesService) { }

  ngOnInit() {
    this.entries$ = this.entriesSvc.getEntries()
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  createNewEntry(entry: Entry) {
    this.entriesSvc.addEntry(entry);
    this.entries$ = this.entriesSvc.getEntries()
  }

}
