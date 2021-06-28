import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'todos', component: BoardComponent},
  {path: 'todo/:id', component: TodoComponent},
  { path: '',   redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
