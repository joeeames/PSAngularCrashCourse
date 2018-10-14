import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  public username: string = null;
  public loggedIn = false;

  constructor() { }
}
