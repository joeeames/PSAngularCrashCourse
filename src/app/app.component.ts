import { Component } from '@angular/core';
import { entries } from './entrydata';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entryList = entries;
  
  constructor() {}

  ngOnInit() {
  }
  
}
