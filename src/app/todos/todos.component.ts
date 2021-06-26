import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        title: "Grocery Shopping",
        description: "Go to wholefoods and buy veggies",
        completed: false
      },
      {
        title: "Car gas",
        description: "Gas up the car",
        completed: true
      },
      {
        title: "House cleaning",
        description: "Clean the house",
        completed: false
      },
      {
        title: "Haircut",
        description: "Get a haircut",
        completed: false
      }
    ];
  }

  edit(i: number) {
    console.log(i);
  }

  delete(i: number) {
    const todos = this.todos.filter((el, index) => index != i);

    this.todos = todos;
  }

  toggle(i: number) {
    const todos = [...this.todos];
    todos[i].completed = !todos[i].completed;

    this.todos = todos;
  }
}
