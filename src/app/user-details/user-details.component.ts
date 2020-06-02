import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/user';
import { Action } from '../shared/action.enum';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  action: Action;

  @Input()
  user: User;

  @Output()
  notify: EventEmitter<Action> = new EventEmitter<Action>();

  constructor(private usersSrv: UsersService) {}

  ngOnInit() {}

  submitData(isValid: boolean) {
    if (isValid) {
      if (this.action == Action.Update) {
        this.usersSrv.Update(this.user);
      } else if (this.action == Action.Delete) {
        this.usersSrv.Delete(this.user);
      } else if (this.action == Action.Insert) {
        this.usersSrv.Insert(this.user);
      }

      this.notify.emit(this.action);
    }
  }
}
