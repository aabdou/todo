import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Task} from '../../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Task[] = [];
  ontime: Task[] = [];
  completed: Task[] = [];
  overdue: Task[] = [];

  constructor(private router: Router , private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  edit(i: number) {
    this.router.navigate(['/todo', {id: i}]);
  }

  delete(i: number) {
    this.todoService.deleteTodo(i)
    this.todos = this.todoService.getTodos();
  }

  toggle(i: number) {
    const todo = this.todos.find(el => el.id == i);
    if (todo) {
      todo.completed = !todo.completed;
      this.todoService.saveTodo(todo);
      this.loadTodos();
    }
  }

  addTodo() {
    this.router.navigate(['/todo']);
  }

  private loadTodos() {
    const today = new Date();

    this.todos = this.todoService.getTodos();
    this.ontime = this.todos.filter(el => !el.completed && new Date(el.dueDate) >= today);
    this.completed = this.todos.filter(el => el.completed);
    this.overdue = this.todos.filter(el => !el.completed && new Date(el.dueDate) < today);
  }
}
