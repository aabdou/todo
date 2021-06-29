import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';
import {Task} from '../../models/todo' ; 
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo?: Task;
  boardId: string = "";

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    const todoId = Number(this.route.snapshot.paramMap.get('id'));
    this.boardId = this.route.snapshot.paramMap.get('boardId') || "";

    if (todoId) {
      this.todo = this.todoService.getTodo(this.boardId, todoId);
    }
    else {
      this.todo = new Task();
    }
  }

  save() {
    if (this.todo!.id == 0) {
      this.todo!.id = this.todoService.addTodo(this.boardId, this.todo!);
    }
    else{
      this.todoService.saveTodo(this.boardId, this.todo!);
    }

    this.router.navigate(['/board/:id', {id: this.boardId}]);
  }
}
