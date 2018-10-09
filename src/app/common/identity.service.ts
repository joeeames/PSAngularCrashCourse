import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Identity } from '../model/identity';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private identity: Identity = {
    loggedIn: false,
    username: ''
  };
  private identitySubject = new BehaviorSubject<Identity>(this.identity);
  public identity$ = this.identitySubject.asObservable()

  constructor() {
  }

  login(username: string): void {
    this.identity.username = username;
    this.identity.loggedIn = true;
    this.identitySubject.next(this.identity);
  }

  logout(): void {
    this.identity.username = '';
    this.identity.loggedIn = false;
    this.identitySubject.next(this.identity);
  }

}
