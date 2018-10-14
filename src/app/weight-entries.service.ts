import { Injectable } from "@angular/core";
import { Entry } from "./model/entry";
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  public entriesArray: Entry[] = [];
  private entriesSubject = new BehaviorSubject(this.entriesArray);
  
  constructor(private http: HttpClient) {
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

  public addEntry(entry: Entry) {
    // return this.http.post('/api/entries/', entry)
    // .subscribe(() => { this.getEntries() })
  }

  public deleteEntry(entry: Entry) {
    // this.http.delete('/api/entries/' + entry.id)
    //   .subscribe(() => {
    //     this.getEntries();
    //   })
  }

}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}