import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {Todo as TodoModel} from '../../models/todo' ; 
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo?: TodoModel;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    const todoId = Number(this.route.snapshot.paramMap.get('id'));
    if (todoId) {
      this.todo = this.todoService.getTodo(todoId);
    }
    else {
      this.todo = new TodoModel();
    }
  }

  save() {
    this.todoService.saveTodo(this.todo!);
  }
}
