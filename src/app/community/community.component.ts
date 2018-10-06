import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'hm-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
    constructor(private commentsSvc: CommentsService) { }

  ngOnInit() {
    this.commentsSvc.getComments();
    this.commentsSvc.latest10Comments$.subscribe(c => {
      console.log('c', c);
    })
  }

  newComment(inputBox) {
    console.log(inputBox.value)
    let newComment: any = {commenter: 'You', comment: inputBox.value};
    this.commentsSvc.addComment(newComment);
    inputBox.value = '';
  }

}
