import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  addTodo() {
    if(this.newTodo.taskDesc){
      this.add.emit(this.newTodo);
      this.newTodo = new Todo();
    }else{
      return false;
    }
    
  }

  omit_special_char(event)
  {   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   if((k == 44 || k == 45 || k == 95)){
     return true;
   }else{
    return(((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)) ); 
   }
  }
}
