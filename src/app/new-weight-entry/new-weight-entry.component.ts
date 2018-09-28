import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';

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
  max

  constructor(public entries: WeightEntriesService) { 
  }

  ngOnInit() {
    this.resetForm();
  }

  createEntry() {
    var e = Object.assign({}, this.model, 
      {
        bodyfat: this.model.bodyfat / 100,
        date: new Date(this.model.date)
      })

    this.entries.addEntry(e)
  }

  resetForm() {
    this.model = {
      date:new Date().toLocaleDateString()
    }
  }

}
