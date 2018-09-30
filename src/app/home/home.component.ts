import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';
declare var $;

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBodyFat = true;
  entryToDelete: Entry;

  constructor(public entryService: WeightEntriesService) { 
  }

  ngOnInit() {
    
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
    
  }
  
  deleteEntry(entry) {
    this.entryToDelete = entry;
    this.showModal();
    
  }

  deleteRowConfirmed() {
    this.entryService.deleteEntry(this.entryToDelete);
  }

  showModal() {
    $('#exampleModal').modal()
  }
  
}
