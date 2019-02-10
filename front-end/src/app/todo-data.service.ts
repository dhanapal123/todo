import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoDataService {
  toDoPending: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: string): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: string): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: Todo) {
    todo.taskCompleted = !todo.taskCompleted;
    return this.api.updateTodo(todo);
  }

  getPendingTodo(): Observable<Todo[]> {
    return this.api.getAllPendingTodos();
  }

}
