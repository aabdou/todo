import { Injectable } from '@angular/core';
import {Task} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodo(boardId: string, id: number): Task | undefined {
    return this.loadTodos(boardId).find(el => el.id == id);
  }

  getTodos(boardId: string): Task[] {
    return this.loadTodos(boardId);
  }

  saveTodo(boardId: string, todo: Task) {
    const todos = this.loadTodos(boardId);
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == todo.id) {
        todos[i].title = todo.title;
        todos[i].description = todo.description;
        todos[i].completed = todo.completed;
        todos[i].dueDate = todo.dueDate;
      }
    }

    window.localStorage.setItem(boardId, JSON.stringify(todos));
  }

  addTodo(boardId: string, todo: Task): number {
    const nextId = parseInt(window.localStorage.getItem('nextid') || "1");
    todo.id = nextId;

    const todos = this.loadTodos(boardId);
    todos.push(todo);

    window.localStorage.setItem(boardId, JSON.stringify(todos));
    window.localStorage.setItem('nextid', (nextId + 1).toString());

    return nextId;
  }

  deleteTodo(boardId: string, id: number) {
    const todos = this.loadTodos(boardId).filter(el => el.id != id);

    window.localStorage.setItem(boardId, JSON.stringify(todos));
  }

  private loadTodos(boardId: string): Task[] {
    const tmp = window.localStorage.getItem(boardId);
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
