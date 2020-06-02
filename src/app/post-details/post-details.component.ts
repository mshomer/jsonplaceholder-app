import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../model/post';
import { Action } from '../shared/action.enum';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  action: Action;

  @Input()
  post: Post;

  @Output()
  notify: EventEmitter<Action> = new EventEmitter<Action>();

  constructor(private postsSrv: PostsService) {}

  ngOnInit() {}

  submitData(isValid: boolean) {
    if (isValid) {
      if (this.action == Action.Update) {
        this.postsSrv.Update(this.post);
      } else if (this.action == Action.Delete) {
        this.postsSrv.Delete(this.post);
      } else if (this.action == Action.Insert) {
        this.postsSrv.Insert(this.post);
      }

      this.notify.emit(this.action);
    }
  }
}
