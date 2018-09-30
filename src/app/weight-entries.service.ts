import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Entry } from './model/entry';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  private entriesArray: Entry[] = [
    {id:1,date:new Date('1/1/1996'),weight:165,bodyfat:.20},
    {id:2,date:new Date('1/2/1996'),weight:164,bodyfat:.19},
    {id:3,date:new Date('1/3/1996'),weight:164,bodyfat:.19},
    {id:4,date:new Date('1/12/1996'),weight:161,bodyfat:.18},
    {id:5,date:new Date('12/31/1995'),weight:167,bodyfat:.20},
    {id:6,date:new Date('12/1/1995'),weight:161,bodyfat:.18},
  ]
  private entriesSubject = new BehaviorSubject(this.entriesArray);
  public entries$ = this.entriesSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  addEntry(entry: Entry) {
    const newId = getMaxId(this.entriesArray) + 1;
    this.entriesArray = [...this.entriesArray, { ...entry, id: newId }];
    this.entriesSubject.next(this.entriesArray);
  }

  public getStuff() {
    console.log('hi');
    return this.http.get('/api/entries')
  }

  public sortedEntries$ = this.http.get('/api/entries').pipe(
    tap(d => {
      console.log('http request', d);
    })
  );
    // console.log('hi');
  //   return this.entries$.pipe(map(d => {
  //     return [...d].sort((a, b) => {
  //       if(a.date > b.date) {
  //         return 1;
  //       } else if (a.date.getTime() == b.date.getTime()) {
  //         return 0;
  //       } else {
  //         return -1
  //       }
  //     });
  //   }),
  //   tap(() => {
  //     console.log('hi2');
  //   })
  //   );
  // }

  top3SortedEntries$ = this.entries$.pipe(map(d => {
    return [...d].sort((a, b) => {
      if(a.date > b.date) {
        return 1;
      } else if (a.date.getTime() == b.date.getTime()) {
        return 0;
      } else {
        return -1
      }
    }).slice(d.length-3);
  }))

  public deleteEntry(entry: Entry) {
    this.entriesArray = this.entriesArray.filter(r => {
      return r.id !== entry.id
    })
    this.entriesSubject.next(this.entriesArray);
  }

}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}







