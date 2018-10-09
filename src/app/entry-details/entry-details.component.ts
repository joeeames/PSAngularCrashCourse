import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { SettingsService } from '../settings.service';
import { ActivatedRouteSnapshot, Router, ActivatedRoute} from '@angular/router';
import { Entry } from '../model/entry';

@Component({
  selector: 'hm-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  trackBodyFat: Boolean;
  entry: Entry;

  constructor(public entries: WeightEntriesService,
    public settingsSvc: SettingsService,
    private router: ActivatedRoute
    ) { 
  }

  ngOnInit() {
    this.settingsSvc.getSettings();
    this.settingsSvc.settings$.subscribe(settings => {
      this.trackBodyFat = settings.trackBodyFat;
    })
    this.entries.getEntry(this.router.snapshot.params.id)
    .subscribe(entry => {
      this.entry = entry;
    })
  }

}
