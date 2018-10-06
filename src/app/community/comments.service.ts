import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Comment } from '../model/comment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private commentsArray: Comment[] = [];
  private commentsSubject = new BehaviorSubject(this.commentsArray);

  constructor(private http: HttpClient) {
  }

  addComment(comment: Comment) : Observable<Object> {
    let post = this.http.post('/api/comments/', comment);
    post.subscribe(() => { this.getComments() });
    return post;
  }

  public getComments(): void {
    this.http.get<Comment[]>('/api/comments').pipe(
    ).subscribe(comments => {
      this.commentsArray = comments;
      this.commentsSubject.next(this.commentsArray);
    });
  }

  public sortedComments$ = this.commentsSubject.pipe(
    map(comments => {
      return [...comments].sort((a:Comment, b:Comment) => {
        if(a.id > b.id) {
          return 1;
        } else if (a.id == b.id) {
          return 0;
        } else {
          return -1
        }
      })
    })
  )

  public latest10Comments$ = this.sortedComments$.pipe(
    map(comments => {
      let i = comments.length > 10 ? comments.length-10 : 0
      return comments.slice(i)
    })
  )

  public deleteComment(comment: Comment) {
    this.http.delete('/api/comments/' + comment.id)
      .subscribe(() => {
        this.getComments();
      })
  }

}








