import { Component } from '@angular/core';
import { WeightEntriesService } from './weight-entries.service';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBodyFat = true;
  toggleClass: string;

  constructor(public entriesSvc: WeightEntriesService) {}

  ngOnInit() {
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }
 
  
}
