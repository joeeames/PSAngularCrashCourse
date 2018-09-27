import { Injectable } from '@angular/core';
import { Subject, of, BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Entry } from './model/entry';

const INITIAL_ENTRIES: Entry[] = [
  {id:1,date:new Date('1/1/2018'),weight:130,bodyfat:.28},
  {id:5,date:new Date('1/10/2018'),weight:128,bodyfat:.27}
]

@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  private 
  private entriesSubject = new BehaviorSubject(INITIAL_ENTRIES);
  public entries$ = this.entriesSubject.asObservable();

  constructor() {
  }

  addEntry(entry: Entry) {
    this.entries$.pipe(
      map((entries) => {
        const newId = getMaxId(entries) + 1;
        return [...entries, { ...entry, id: newId }]
      }),
      take(1)
    ).subscribe();

    const newId = getMaxId(this.entriesArray) + 1;
    this.entriesArray.push({ ...entry, id: newId });
    this.entriesSubject.next(this.entriesArray);
  }

}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}







