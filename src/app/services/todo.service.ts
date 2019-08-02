  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import {HttpClient, HttpHeaders} from "@angular/common/http";

  import {Todo} from '../models/Todos';

  const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type': 'application/json'
    })
  }


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string ='https://jsonplaceholder.typicode.com/todos';
  todoLimits = '?_limit=5';


  constructor(private http:HttpClient) { }
//Get Todos
  getTodos():Observable<Todo[]>{
  return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimits}`);
  }

  //Delete Todo
  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }
  //Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);

  }
}
