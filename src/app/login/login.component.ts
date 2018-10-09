import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../common/identity.service';
import { Identity } from '../model/identity';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  identity: Identity;

  constructor(private identitySvc: IdentityService) { }

  ngOnInit() {
    this.identitySvc.identity$.subscribe(id => {
      this.identity = id;
    })
  }

  login() {
    this.identitySvc.login(this.username);
  }

  logout() {
    this.identitySvc.logout();
  }

}
