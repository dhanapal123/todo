import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[];
  @Input()
  pendingTodos: Todo[];

  pendingcount: any;

  constructor(private todoDataService: TodoDataService
  ) {
  }
  public async ngOnInit() {
    this.todoDataService.toDoPending.subscribe(data => {
      if (data !== null) {
        this.todoDataService
          .getPendingTodo()
          .subscribe(
            (pendingTodos) => {
              this.pendingTodos = pendingTodos;
            }
          );
      }
    })
    
  }

}
