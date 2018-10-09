import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'hm-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent implements OnInit {
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
