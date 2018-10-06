import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Entry } from './model/entry';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  private entriesArray: Entry[] = [];
  // = [
  //   {id:1,date:new Date('1/1/1996'),weight:165,bodyfat:.20},
  //   {id:2,date:new Date('1/2/1996'),weight:164,bodyfat:.19},
  //   {id:3,date:new Date('1/3/1996'),weight:164,bodyfat:.19},
  //   {id:4,date:new Date('1/12/1996'),weight:161,bodyfat:.18},
  //   {id:5,date:new Date('12/31/1995'),weight:167,bodyfat:.20},
  //   {id:6,date:new Date('12/1/1995'),weight:161,bodyfat:.18},
  // ]
  private entriesSubject = new BehaviorSubject(this.entriesArray);

  constructor(private http: HttpClient) {
  }

  addEntry(entry: Entry) : Observable<Object> {
    // for when this is local
    // entry.id = getMaxId(this.entriesArray) + 1;
    // this.entriesArray = [...this.entriesArray, { ...entry, id: newId }];
    return this.http.post('/api/entries/', entry)
    .pipe(
      tap(
        () => { this.getEntries() }
      )
    )
  }

  public getEntries(): void {
    this.http.get<Entry[]>('/api/entries').pipe(
      map(entries => {
        return entries.map(e => {
          e.date = new Date(e.date);
          return e
        })
      })
    ).subscribe(entries => {
      this.entriesArray = entries;
      this.entriesSubject.next(this.entriesArray);
    });
  }

  public sortedEntries$ = this.entriesSubject.pipe(
    map(entries => {
      return [...entries].sort((a:Entry, b:Entry) => {
        if(a.date > b.date) {
          return 1;
        } else if (a.date.getTime() == b.date.getTime()) {
          return 0;
        } else {
          return -1
        }
      })
    })
  )

  public top3SortedEntries$ = this.sortedEntries$.pipe(
    map(entries => entries.slice(entries.length-3) )
  )

  public deleteEntry(entry: Entry) {
    this.http.delete('/api/entries/' + entry.id)
      .subscribe(() => {
        this.getEntries();
      })
  }

}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}







