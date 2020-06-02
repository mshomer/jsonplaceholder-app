import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/Rx';
import { User } from '../model/user';

@Injectable()
export class UsersService {

  //private users : User[];
  private url : string = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http : Http) { }


  // GetAll() : User[]
  // {
  //   return this.users;
  // }

  // GetOne(id : number) : User
  // {
  //   return this.users.filter(data => data.id == id)[0];
  // }

  // Update(user: User) : User[]
  // {
  //   for(var i = 0 ; i < this.users.length ; i++)
  //   {
  //     if(this.users[i].id == user.id)
  //     {
  //       this.users[i] = user;
  //     }
  //   }

  //   return this.users;
  // }
  
  // Delete(user: User) :User[]
  // {
  //   for(var i = 0 ; i < this.users.length ; i++)
  //   {
  //     if(this.users[i].id == user.id)
  //     {
  //       this.users.splice(i, 1);
  //     }
  //   }

  //   return this.users;
  // }

  // Insert(user: User) : User[]
  // {
  //   var lastIndexID = 1;
  //   if(this.users.length > 0){
  //     lastIndexID = this.users[this.users.length - 1].id + 1;
  //   }

  //   user.id = lastIndexID;

  //   this.users.push(user);
  //   return this.users;
  // }

  GetAll() : Observable<any>
  {
    return this.http.get(this.url).map((res :Response) => res.json());
  }

  GetOne(id : number) : Observable<any>
  {
    return this.http.get(this.url + "/" + id).map((res :Response) => res.json());
  }

  Update(user: User)
  {
    this.http.put(this.url + "/" + user.id, JSON.stringify(user)).map((res :Response) => res.json())
    .subscribe(data=>{});
  }
  
  Delete(user: User) 
  {
    this.http.delete(this.url + "/" + user.id).map((res :Response) => res.json())
    .subscribe(data=>{});
  }

  Insert(user: User)
  {
    this.http.post(this.url, JSON.stringify(user)).map((res :Response) => res.json())
    .subscribe(data=>{});
  }
}
