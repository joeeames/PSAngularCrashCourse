import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public identitySvc: IdentityService) { }

  ngOnInit() {
  }

  login() {
    this.identitySvc.loggedIn = true;
  }

  logout() {
    this.identitySvc.loggedIn = false;
  }

}
