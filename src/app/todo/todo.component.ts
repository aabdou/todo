import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {Task} from '../../models/todo' ; 
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo?: Task;

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    const todoId = Number(this.route.snapshot.paramMap.get('id'));
    if (todoId) {
      this.todo = this.todoService.getTodo(todoId);
    }
    else {
      this.todo = new Task();
    }
  }

  save() {
    if (this.todo!.id == 0) {
      this.todo!.id = this.todoService.addTodo(this.todo!);
    }
    else{
      this.todoService.saveTodo(this.todo!);
    }
  }
}
