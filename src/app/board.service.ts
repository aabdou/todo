import { Injectable } from '@angular/core';
import { TaskBoard } from 'src/models/taskboard';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  getTaskBoards(): TaskBoard[] {
    return this.loadBoards();
  }

  addBoard(board: TaskBoard): number {
    const nextId = parseInt(window.localStorage.getItem('nextid') || "1");
    board.id = nextId;

    const boards = this.loadBoards();
    boards.push(board);

    window.localStorage.setItem('boards', JSON.stringify(boards));
    window.localStorage.setItem('nextid', (nextId + 1).toString());

    return nextId;
  }

  private loadBoards() : TaskBoard[] {
    const tmp = window.localStorage.getItem('boards');
    let boards;
    if (tmp) {
      boards = JSON.parse(tmp);
    }
    else {
      boards = [];
    }

    return boards;
  }
}
