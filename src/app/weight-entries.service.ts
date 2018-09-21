import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  privateData = [
    {id:1,date:'1/1/2018',weight:130,bodyfat:.28},
    {id:5,date:'1/10/2018',weight:128,bodyfat:.27}
  ]
  data: any;

  constructor() {
    this.data = of(this.privateData);
  }


  addEntry(entry) {
    const newId = getMaxId(this.privateData) + 1;
    // MAKE THIS UPDATE THE OBSERVABLE
    this.privateData.push(Object.assign({id:newId}, entry));
  }



}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}







