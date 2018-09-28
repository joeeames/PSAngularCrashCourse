import { Component } from '@angular/core';
import { Entry } from './model/entry';
declare var $;

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private entries: Entry[] = [
    {id:1,date:new Date('1/1/1996'),weight:165,bodyfat:.20},
    {id:2,date:new Date('1/2/1996'),weight:164,bodyfat:.19},
    {id:3,date:new Date('1/3/1996'),weight:164,bodyfat:.19},
    {id:4,date:new Date('1/12/1996'),weight:161,bodyfat:.18},
    {id:5,date:new Date('12/31/1995'),weight:167,bodyfat:.20},
    {id:6,date:new Date('12/1/1995'),weight:161,bodyfat:.18},
  ]
  showBodyFat = true;
  entryToDelete: Entry;

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
    
  }
  
  deleteEntry(entry) {
    this.entryToDelete = entry;
    this.showModal();
    
  }

  deleteRowConfirmed() {
    this.entries = this.entries.filter(r => {
      return r.id !== this.entryToDelete.id
    })
  }

  showModal() {
    $('#exampleModal').modal()
  }
}
