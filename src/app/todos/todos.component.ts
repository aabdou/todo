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
        id: 1,
        title: "Grocery Shopping",
        description: "Go to wholefoods and buy veggies",
        completed: false
      },
      { 
        id: 2,
        title: "Car gas",
        description: "Gas up the car",
        completed: true
      },
      {
        id: 3,
        title: "House cleaning",
        description: "Clean the house",
        completed: false
      },
      {
        id: 4,
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
    const todos = this.todos.filter((el) => el.id != i);

    this.todos = todos;
  }

  toggle(i: number) {
    const todos = [...this.todos];
    todos[i].completed = !todos[i].completed;

    this.todos = todos;
  }
}
