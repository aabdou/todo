import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Task} from '../../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  todos: Task[] = [];
  ontime: Task[] = [];
  completed: Task[] = [];
  overdue: Task[] = [];
  boardId: string = "";

  constructor(private router: Router , private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    this.boardId = this.route.snapshot.paramMap.get('id') || "";

    this.loadTodos();
  }

  edit(i: number) {
    this.router.navigate(['/todo', {boardId: this.boardId, id: i}]);
  }

  delete(i: number) {
    this.todoService.deleteTodo(this.boardId, i)
    this.todos = this.todoService.getTodos(this.boardId);
  }

  toggle(i: number) {
    const todo = this.todos.find(el => el.id == i);
    if (todo) {
      todo.completed = !todo.completed;
      this.todoService.saveTodo(this.boardId, todo);
      this.loadTodos();
    }
  }

  addTodo() {
    this.router.navigate(['/newtodo', {boardId: this.boardId}]);
  }

  private loadTodos() {
    const today = new Date();

    this.todos = this.todoService.getTodos(this.boardId);
    this.ontime = this.todos.filter(el => !el.completed && new Date(el.dueDate) >= today);
    this.completed = this.todos.filter(el => el.completed);
    this.overdue = this.todos.filter(el => !el.completed && new Date(el.dueDate) < today);
  }
}
