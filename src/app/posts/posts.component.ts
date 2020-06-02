import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Post } from '../model/post';
import { Action } from '../shared/action.enum';
import { combineLatest } from 'rxjs';
import { UsersService } from '../services/users.service';
import { User } from '../model/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private postsSrv: PostsService,
    private userSrv: UsersService
  ) {}

  user: User;

  post: Post;
  posts: Post[];
  action: Action;

  search: string;

  ngOnInit() {
    combineLatest(this.activatedRoute.params, this.postsSrv.GetAll()).subscribe(
      ([params, data]) => {
        const userId = +params.userId;
        if (userId > 0) {
          this.userSrv.GetOne(userId).subscribe((_user) => {
            this.user = _user;
            this.posts = data.filter((post) => post.userId == userId);
          });
        } else {
          this.posts = data;
        }
      }
    );
  }

  EditPost(id: number) {
    this.post = this.posts.filter((post) => post.id == id)[0];
  }

  CreateNew() {
    this.post = new Post(-1, this.user.id, '', '');
  }

  getNotify(action: Action) {
    switch (action) {
      case Action.None:
        this.post = null;
        break;
      case Action.Insert:
        var lastIndexID = 1;
        if (this.posts.length > 0) {
          lastIndexID = this.posts[this.posts.length - 1].id + 1;
        }

        this.post.id = lastIndexID;

        this.posts.push(this.post);

        this.post = null;
        break;
      case Action.Update:
        for (var i = 0; i < this.posts.length; i++) {
          if (this.posts[i].id == this.post.id) {
            this.posts[i] = this.post;
          }
        }

        this.post = null;
        break;
      case Action.Delete:
        for (var i = 0; i < this.posts.length; i++) {
          if (this.posts[i].id == this.post.id) {
            this.posts.splice(i, 1);
          }
        }

        this.post = null;
        break;
    }
  }
}
