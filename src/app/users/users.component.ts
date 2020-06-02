import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../model/user';
import { Action } from '../shared/action.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User;
  users: User[];
  search: string;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private userSrv: UsersService
  ) {}

  ngOnInit() {
    this.userSrv.GetAll().subscribe((data) => {
      this.users = data;
    });
  }

  EditUser(id: number) {
    this.user = this.users.filter((user) => user.id == id)[0];
  }

  CreateNew() {
    this.user = new User();
  }

  DeleteUser(user: User) {
    this.user = user;
    this.userSrv.Delete(user);
    this.getNotify(Action.Delete);
  }

  getNotify(action: Action) {
    switch (action) {
      case Action.None:
        this.user = null;
        break;
      case Action.Insert:
        var lastIndexID = 1;
        if (this.users.length > 0) {
          lastIndexID = this.users[this.users.length - 1].id + 1;
        }

        this.user.id = lastIndexID;

        this.users.push(this.user);

        this.user = null;
        break;
      case Action.Update:
        for (var i = 0; i < this.users.length; i++) {
          if (this.users[i].id == this.user.id) {
            this.users[i] = this.user;
          }
        }
        this.user = null;
        break;
      case Action.Delete:
        for (var i = 0; i < this.users.length; i++) {
          if (this.users[i].id == this.user.id) {
            this.users.splice(i, 1);
          }
        }

        this.user = null;
        break;
    }
  }
}
