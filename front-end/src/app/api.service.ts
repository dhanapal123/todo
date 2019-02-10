import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
const USER_ID = environment.userId;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(`${API_URL}/task/${USER_ID}`)
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  public getAllPendingTodos(): Observable<Todo[]> {
     return this.http
      .get(`${API_URL}/task/${USER_ID}/pending`)
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    todo.userId=1;
    return this.http
      .post(API_URL + '/task', todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public getTodoById(todoId: string): Observable<Todo> {
    return this.http
      .get(API_URL + '/task/' + todoId)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put(API_URL + '/task/' + todo._id, todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTodoById(todoId: string): Observable<null> {
    return this.http
      .delete(API_URL + '/task/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
