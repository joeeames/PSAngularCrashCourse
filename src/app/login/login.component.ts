import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('')
  });

  constructor(public identitySvc: IdentityService) { }

  ngOnInit() {
  }

  login() {
    this.identitySvc.loggedIn = true;
    this.identitySvc.username = this.loginForm.value.username;
  }

  logout() {
    this.identitySvc.loggedIn = false;
  }

}
