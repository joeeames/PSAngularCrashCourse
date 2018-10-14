import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {
  @Input() showBodyFat: boolean;
  @Output() create = new EventEmitter();
  entryForm = new FormGroup({
    weight: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    bodyfat: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit() {
  }

  createEntry() {
    let newEntry = Object.assign({}, this.entryForm.value, 
      {
        bodyfat: this.entryForm.value.bodyfat / 100,
        date: new Date(this.entryForm.value.date)
      })

    this.create.emit(newEntry);
    this.entryForm.reset();
  }

}
