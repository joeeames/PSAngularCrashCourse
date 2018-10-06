import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Settings } from './model/settings';
import { HttpClient } from '@angular/common/http';

const url = '/api/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: Settings = {
    trackBodyFat: false
  };
  private settingsSubject = new BehaviorSubject<Settings>(this.settings);

  constructor(private http: HttpClient) {
  }

  updateSettings(settings: Settings) : Observable<Object> {
    let post = this.http.put<Settings>(url, settings);
    post.subscribe((retval) => { 
      this.settings = retval;
      this.settingsSubject.next(this.settings);
    });
    return post;
  }

  public getSettings(): void {
    this.http.get<Settings>(url)
    .subscribe(settings => {
      this.settings = settings;
      this.settingsSubject.next(this.settings);
    });
  }

  public settings$ = this.settingsSubject.asObservable()


}







