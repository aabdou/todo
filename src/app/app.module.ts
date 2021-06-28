import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { TodoComponent } from './todo/todo.component';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule  } from '@angular/material/core'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { BoardlistComponent } from './boardlist/boardlist.component';
import { BoardformComponent } from './boardform/boardform.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TodoComponent,
    BoardlistComponent,
    BoardformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
