import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IdentityService } from '../identity.service';

@Injectable({
  providedIn: 'root'
})
export class CommunityGuard implements CanActivate {

  constructor(private identitySvc: IdentityService,
    private router: Router) {}

  canActivate(): boolean {
      if(this.identitySvc.loggedIn) {
         return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}