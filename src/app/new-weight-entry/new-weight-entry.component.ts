import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {
  @Input() showBodyFat: boolean;
  @Output() create = new EventEmitter;
  model: any = {};

  constructor() { 
  }
  ngOnInit() {
  }

  createEntry() {
    var newEvent = Object.assign({}, this.model, 
      {
        bodyfat: this.model.bodyfat / 100,
        date: new Date(this.model.date)
      })

    this.create.emit(newEvent)
  }

}
