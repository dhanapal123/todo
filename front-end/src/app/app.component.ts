import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  pendingTodos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  ngOnChanges(){
    this.todoDataService.toDoPending.next(true);
  }
  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
      this.todoDataService.toDoPending.next(true);

   }

  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
          this.todoDataService.toDoPending.next(true);
        }
      );
  }

  onToggleTodoComplete(todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
          this.todoDataService.toDoPending.next(true);
        }
      );
  }

  onRemoveTodo(todo) {
    this.todoDataService
      .deleteTodoById(todo._id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t._id !== todo._id);
        }
      );
  }
}
