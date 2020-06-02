import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../model/post';

@Pipe({
  name: 'filterPosts',
})
export class FilterPostsPipe implements PipeTransform {
  transform(items: Post[], filterBy: string): Post[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy
      ? items.filter(
          (post: Post) =>
            post.title.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
      : items;
  }
}
