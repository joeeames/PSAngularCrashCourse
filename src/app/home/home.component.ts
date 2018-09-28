import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() bodyFatVisible: boolean;
  @Input('data') entries: Entry[];
  @Output() deleteRow = new EventEmitter<Entry>();

  constructor(public entryService: WeightEntriesService) { 
  }

  ngOnInit() {
    
  }

  delete(entry) {
    this.deleteRow.emit(entry);
  }
 
  
}
