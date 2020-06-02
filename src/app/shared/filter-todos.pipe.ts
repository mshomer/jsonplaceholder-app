import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(items: Todo[], filterBy: string): Todo[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy
      ? items.filter(
          (user: Todo) =>
            user.title.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
      : items;
  }
}
