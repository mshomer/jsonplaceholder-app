import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { TodosService } from './services/todos.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ToDosDetailsComponent } from './todos-details/todos-details.component';
import { FilterUserPipe } from './shared/filter-user.pipe';
import { FilterPostsPipe } from './shared/filter-posts.pipe';
import { FilterTodosPipe } from './shared/filter-todos.pipe';
import { CustomHoverDirective } from './shared/customHover.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users/:userId/posts', component: PostsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'users/:userId/todos', component: TodosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    TodosComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    ToDosDetailsComponent,
    FilterUserPipe,
    FilterPostsPipe,
    FilterTodosPipe,
    CustomHoverDirective,
    NavbarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [UsersService, PostsService, TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
