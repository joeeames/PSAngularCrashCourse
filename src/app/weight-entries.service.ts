import { Injectable } from "@angular/core";
import { Entry } from "./model/entry";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  private entriesArray: Entry[] = [];
  private entriesSubject = new BehaviorSubject<Entry[]>(this.entriesArray);

  constructor(private http: HttpClient) {
  }

  public getEntries(): void {
    this.http.get<Entry[]>('/api/entries')
    .pipe(
      map(entries => {
        return entries.map(e => {
          e.date = new Date(e.date);
          return e;
        })
      })
    ).subscribe(entries => {
      this.entriesArray = entries;
      this.entriesSubject.next(this.entriesArray);
    })
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

  addEntry(entry: Entry) {
    return this.http.post('/api/entries', entry)
    .subscribe(() => { this.getEntries() })
  }

  public deleteEntry(entry: Entry) {
    return this.http.delete('/api/entries/' + entry.id)
    .subscribe(() => { this.getEntries() })
  }

}