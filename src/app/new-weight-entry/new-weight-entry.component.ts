import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {
  @Input() showBodyFat: boolean;
  @Output() create = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createEntry() {
    this.create.emit({id:-1,date: new Date('1/15/1996'), weight:110, bodyfat:0.35});
  }

}
