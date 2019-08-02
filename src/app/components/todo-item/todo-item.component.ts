 import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  setClassess ( ){

    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes
    
  }

  onToggle(todo){
    todo.completed = !todo.completed;
  }

  onDelete(todo){
    console.log('delete ');
  }


}
