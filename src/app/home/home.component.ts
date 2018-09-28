import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBodyFat: boolean;
  toggleClass:string = "";

  constructor(public entryService: WeightEntriesService) { 
    this.showBodyFat = true;
  }

  ngOnInit() {
    
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
    if(this.showBodyFat) {
      this.toggleClass = ""
    } else {
      this.toggleClass = "redtext";
    }
  }
  
}
