import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { BoardComponent } from './board/board.component';
import { BoardlistComponent } from './boardlist/boardlist.component';
import { BoardformComponent } from './boardform/boardform.component';

const routes: Routes = [
  {path: 'newboard', component: BoardformComponent},
  {path: 'boards', component: BoardlistComponent},
  {path: 'board/:id', component: BoardComponent},
  {path: 'newtodo', component: TodoComponent},
  {path: 'todo/:boardId/:id', component: TodoComponent},
  { path: '',   redirectTo: '/boards', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
