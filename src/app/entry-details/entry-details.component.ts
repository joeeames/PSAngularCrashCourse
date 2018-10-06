import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'hm-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  showBodyFat: Boolean = true;

  constructor(public entryService: WeightEntriesService,
    private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.entryService.getEntries();
    this.settingsService.getSettings();
    this.settingsService.settings$
      .subscribe(settings => {
        this.showBodyFat = settings.trackBodyFat;
      })
  }

  deleteRow(e) {
    this.entryService.deleteEntry(e);
  }

}
