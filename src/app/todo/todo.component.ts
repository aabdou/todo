import { Component, OnInit, Input } from '@angular/core';
import {Todo as TodoModel} from '../../models/todo' ; 

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: TodoModel = new TodoModel();

  constructor() { }

  ngOnInit(): void {
  
  }

  save() {}
}
