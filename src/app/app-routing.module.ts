import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'todo/:id', component: TodoComponent},
  { path: '',   redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
