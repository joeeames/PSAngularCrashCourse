import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { IdentityService } from '../common/identity.service';
import { Identity } from '../model/identity';

@Component({
  selector: 'hm-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  identity: Identity;
  
  constructor(public commentsSvc: CommentsService,
    private identitySvc: IdentityService) { }

  ngOnInit() {
    this.commentsSvc.getComments();
    this.identitySvc.identity$.subscribe(id => {
      this.identity = id;
    })
  }

  newComment(inputBox) {
    let newComment: any = {commenter: this.identity.username, comment: inputBox.value};
    this.commentsSvc.addComment(newComment);
    inputBox.value = '';
  }

}
