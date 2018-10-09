import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IdentityService } from '../common/identity.service';

@Injectable({
  providedIn: 'root'
})
export class CommunityGuard implements CanActivate {

  constructor(private identitySvc: IdentityService,
    private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let loggedIn : boolean;
      this.identitySvc.identity$.subscribe(i => {
        loggedIn = i.loggedIn
      });
      if(loggedIn) {
         return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}