import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Post } from '../model/post';

@Injectable()
export class PostsService {

  private url : string = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http : Http) { }

  GetAll() : Observable<any>
  {
    return this.http.get(this.url).map((res :Response) => res.json());
  }

  GetOne(id : number) : Observable<any>
  {
    return this.http.get(this.url + "/" + id).map((res :Response) => res.json());
  }

  Update(post: Post)
  {
    this.http.put(this.url + "/" + post.id, JSON.stringify(post)).map((res :Response) => res.json())
    .subscribe(data=>{});
  }
  
  Delete(post: Post) 
  {
    this.http.delete(this.url + "/" + post.id).map((res :Response) => res.json())
    .subscribe(data=>{});
  }

  Insert(post: Post)
  {
    this.http.post(this.url, JSON.stringify(post)).map((res :Response) => res.json())
    .subscribe(data=>{});
  }

  // Init() 
  // {
  //   this.http.get(this.urlPosts).map((res :Response) => res.json()).subscribe( postsData => 
  //   {
  //     this.posts = postsData;
  //     this.http.get(this.urlUsers).map((res :Response) => res.json()).subscribe( usersData => 
  //     {
  //       var users : User[] = usersData;
  //       for(var i = 0; i < this.posts.length ; i++)
  //       {
  //         var user : User = users.filter(item => item.id == this.posts[i].userId)[0];
  //         if(user != null)
  //           this.posts[i].userName = user.name;
  //       }
  //     });
  //   });;
  // }

  // GetAll() : Post[]
  // {
  //   return this.posts;
  // }

  // GetOne(id : number) : Post
  // {
  //   return this.posts.filter(data => data.id == id)[0];
  // }

  // Update(post: Post) : Post[]
  // {
  //   for(var i = 0 ; i < this.posts.length ; i++)
  //   {
  //     if(this.posts[i].id == post.id)
  //     {
  //       this.posts[i] = post;
  //     }
  //   }

  //   return this.posts;
  // }
  
  // Delete(post: Post) :Post[]
  // {
  //   for(var i = 0 ; i < this.posts.length ; i++)
  //   {
  //     if(this.posts[i].id == post.id)
  //     {
  //       this.posts.splice(i, 1);
  //     }
  //   }

  //   return this.posts;
  // }

  // Insert(post: Post) : Post[]
  // {
  //   var lastIndexID = 1;
  //   if(this.posts.length > 0){
  //     lastIndexID = this.posts[this.posts.length - 1].id + 1;
  //   }

  //   post.id = lastIndexID;

  //   this.posts.push(post);
  //   return this.posts;
  // }

  // GetUserPosts(userId : number) : Post[]
  // {
  //   return this.posts.filter(data => data.userId == userId)
  // }
}
