import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entries = [
    {id:1,date:'1/1/2018',weight:130,bodyfat:.28},
    {id:2,date:'1/10/2018',weight:128,bodyfat:.27}
  ]

  constructor() { }

  ngOnInit() {

  }

}
