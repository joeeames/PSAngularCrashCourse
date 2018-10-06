import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public entryService: WeightEntriesService, 
    public settingsService: SettingsService) { 
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
