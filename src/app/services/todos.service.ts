import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Todo } from '../model/todo';

@Injectable()
export class TodosService {

  private url : string = 'https://jsonplaceholder.typicode.com/todos';
  
  constructor(private http : Http) { }

  GetAll() : Observable<any>
  {
    return this.http.get(this.url).map((res :Response) => res.json());
  }

  GetOne(id : number) : Observable<any>
  {
    return this.http.get(this.url + "/" + id).map((res :Response) => res.json());
  }

  Update(todo: Todo)
  {
    this.http.put(this.url + "/" + todo.id, JSON.stringify(todo)).map((res :Response) => res.json())
    .subscribe(data=>{});
  }
  
  Delete(todo: Todo) 
  {
    this.http.delete(this.url + "/" + todo.id).map((res :Response) => res.json())
    .subscribe(data=>{});
  }

  Insert(todo: Todo)
  {
    this.http.post(this.url, JSON.stringify(todo)).map((res :Response) => res.json())
    .subscribe(data=>{});
  }
}
