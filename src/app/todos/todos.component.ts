import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo';
import { Action } from '../shared/action.enum';
import { combineLatest } from 'rxjs';
import { UsersService } from '../services/users.service';
import { User } from '../model/user';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private todosSrv: TodosService,
    private userSrv: UsersService
  ) {}

  user: User;

  todo: Todo;
  todos: Todo[];
  action: Action;

  search: string;

  ngOnInit() {
    combineLatest(this.activatedRoute.params, this.todosSrv.GetAll()).subscribe(
      ([params, data]) => {
        const userId = +params.userId;
        if (userId > 0) {
          this.userSrv.GetOne(userId).subscribe((_user) => {
            this.user = _user;
            this.todos = data.filter((todo) => todo.userId == userId);
          });
        } else {
          this.userSrv.GetAll().subscribe((users) => {
            this.todos = data.map((todo) => {
              const user = users.find((u) => u.id == todo.userId);
              todo['userName'] = user.name;
              return todo;
            });
          });
        }
      }
    );
  }

  EditTodo(id: number) {
    this.todo = this.todos.filter((todo) => todo.id == id)[0];
  }

  CreateNew() {
    this.todo = new Todo(-1, this.user.id, '', false);
  }

  getNotify(action: Action) {
    switch (action) {
      case Action.None:
        this.todo = null;
        break;
      case Action.Insert:
        var lastIndexID = 1;
        if (this.todos.length > 0) {
          lastIndexID = this.todos[this.todos.length - 1].id + 1;
        }

        this.todo.id = lastIndexID;

        this.todos.push(this.todo);

        this.todo = null;
        break;
      case Action.Update:
        for (var i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id == this.todo.id) {
            this.todos[i] = this.todo;
          }
        }

        this.todo = null;
        break;
      case Action.Delete:
        for (var i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id == this.todo.id) {
            this.todos.splice(i, 1);
          }
        }

        this.todo = null;
        break;
    }
  }
}
