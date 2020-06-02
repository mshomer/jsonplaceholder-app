import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo';
import { Action } from '../shared/action.enum';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css'],
})
export class ToDosDetailsComponent implements OnInit {
  action: Action;

  @Input()
  todo: Todo;

  @Output()
  notify: EventEmitter<Action> = new EventEmitter<Action>();

  constructor(private todosSrv: TodosService) {}

  ngOnInit() {}

  submitData(isValid: boolean) {
    if (isValid) {
      if (this.action == Action.Update) {
        this.todosSrv.Update(this.todo);
      } else if (this.action == Action.Delete) {
        this.todosSrv.Delete(this.todo);
      } else if (this.action == Action.Insert) {
        this.todosSrv.Insert(this.todo);
      }

      this.notify.emit(this.action);
    }
  }
}
