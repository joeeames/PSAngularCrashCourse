import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {
  model;
  entryForm: FormGroup;
  weight: FormControl;
  bodyfat: FormControl;
  trackBodyFat: Boolean;

  constructor(public entries: WeightEntriesService,
    private settingsSvc: SettingsService) { 
  }

  ngOnInit() {
    this.resetForm();
    this.settingsSvc.getSettings();
    this.settingsSvc.settings$.subscribe(settings => {
      this.trackBodyFat = settings.trackBodyFat;
    })
  }

  createEntry() {
    var e = Object.assign({}, this.model, 
      {
        bodyfat: this.model.bodyfat / 100,
        date: new Date(this.model.date)
      })

    this.entries.addEntry(e).subscribe((r) => {
      console.log('entry added', r);
    })
  }

  resetForm() {
    this.model = {
      date:new Date().toLocaleDateString()
    }
  }

}
