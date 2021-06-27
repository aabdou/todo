import { Injectable } from '@angular/core';
import {Task} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodo(id: number): Task | undefined {
    return this.loadTodos().find(el => el.id == id);
  }

  getTodos(): Task[] {
    return this.loadTodos();
  }

  saveTodo(todo: Task): number {
    const nextId = parseInt(window.localStorage.getItem('nextid') || "1");
    todo.id = nextId;

    const todos = this.loadTodos();
    todos.push(todo);

    window.localStorage.setItem('todos', JSON.stringify(todos));
    window.localStorage.setItem('nextid', (nextId + 1).toString());

    return nextId;
  }

  deleteTodo(id: number) {
    const todos = this.loadTodos().filter(el => el.id != id);

    window.localStorage.setItem('todos', JSON.stringify(todos));
  }

  private loadTodos(): Task[] {
    const tmp = window.localStorage.getItem('todos');
    let todos;
    if (tmp) {
      todos = JSON.parse(tmp);
    }
    else {
      todos = [];
    }

    return todos;
  }
}
