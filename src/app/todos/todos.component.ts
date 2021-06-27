import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Task[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  edit(i: number) {
    console.log(i);
  }

  delete(i: number) {
    this.todoService.deleteTodo(i)
    this.todos = this.todoService.getTodos();
  }

  toggle(i: number) {
    const todos = [...this.todos];
    todos[i].completed = !todos[i].completed;

    this.todos = todos;
  }
}
