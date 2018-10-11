import { Component } from '@angular/core';
import { WeightEntriesService } from './weight-entries.service';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBodyFat = true;
  toggleColor: string;

  constructor(public entriesSvc: WeightEntriesService) {}

  ngOnInit() {
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
    if(this.showBodyFat) {
      this.toggleColor = null;
    } else {
      this.toggleColor = 'red';
    }
  }
  
}
