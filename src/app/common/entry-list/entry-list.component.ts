import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Entry } from '../../model/entry';
import { Observable } from 'rxjs';
declare var $;

@Component({
  selector: 'hm-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  @Output() deleteEntry = new EventEmitter();
  @Input() entries: Observable<Entry[]>;
  @Input() showBodyFat: Boolean;
  entryToDelete: Entry;
  // showBodyFat: Boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  onDelete(entry) {
    this.entryToDelete = entry;
    this.showModal();
    
  }

  deleteRowConfirmed() {
    this.deleteEntry.emit(this.entryToDelete);
  }

  showModal() {
    $('#exampleModal').modal();
  }

}
