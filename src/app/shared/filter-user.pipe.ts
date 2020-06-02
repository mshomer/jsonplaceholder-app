import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filterUsers',
})
export class FilterUserPipe implements PipeTransform {
  transform(items: User[], filterBy: string): User[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy
      ? items.filter(
          (user: User) => user.name.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
      : items;
  }
}
