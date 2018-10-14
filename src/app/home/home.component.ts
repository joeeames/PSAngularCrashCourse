import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';

declare var $;

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBodyFat = true;
  entryToDelete: Entry;

  constructor(public entriesSvc: WeightEntriesService) { }

  ngOnInit() {
    this.entriesSvc.getEntries();
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  createNewEntry(entry: Entry) {
    this.entriesSvc.addEntry(entry);
  }

  onDelete(entry: Entry) {
    this.entryToDelete = entry;
    $('#exampleModal').modal();
  }

  deleteEntry() {
    this.entriesSvc.deleteEntry(this.entryToDelete);
  }

}
