import { Component } from '@angular/core';
import { IdentityService } from './common/identity.service';


@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false;
  username: string
  constructor(private identitySvc: IdentityService) {}

  ngOnInit() {
    this.identitySvc.identity$.subscribe(id => {
      this.loggedIn = id.loggedIn;
      this.username = id.username;
    })
  }
  
}
