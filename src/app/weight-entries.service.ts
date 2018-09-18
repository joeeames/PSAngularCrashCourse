import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {

  constructor() { }

  data = [
    {id:1,date:'1/1/2018',weight:130,bodyfat:.28},
    {id:5,date:'1/10/2018',weight:128,bodyfat:.27}
  ]

  addEntry(entry) {
    const newId = getMaxId(this.data) + 1;
    this.data.push(Object.assign({id:newId}, entry));
  }



}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}
