import { Injectable } from '@angular/core';
import { Subject, of, BehaviorSubject, Observable } from 'rxjs';
import { Entry } from './model/entry';

@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  private $entriesArray: Entry[] = [
    {id:1,date:new Date('1/1/2018'),weight:130,bodyfat:.28},
    {id:5,date:new Date('1/10/2018'),weight:128,bodyfat:.27}
  ]
  private $entries: BehaviorSubject<Entry[]>;
  public entries: Observable<Entry[]>;

  constructor() {
    this.$entries = new BehaviorSubject(this.$entriesArray);
    this.entries = this.$entries.asObservable();
  }

  addEntry(entry: Entry) {
    const newId = getMaxId(this.$entriesArray) + 1;
    const newEntry = Object.assign({ id: newId }, entry);
    this.$entriesArray.push(newEntry);
    this.$entries.next(this.$entriesArray);
  }



}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}







