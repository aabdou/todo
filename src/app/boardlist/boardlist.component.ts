import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TaskBoard } from 'src/models/taskboard';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
export class BoardlistComponent implements OnInit {
  boards: TaskBoard[] = [];

  constructor(private router: Router, private boardService: BoardService) { }

  ngOnInit(): void {
    this.boards = this.boardService.getTaskBoards();
  }

  addBoard() {
    this.router.navigate(['/newboard']);
  }

  gotoBoard(id: number) {
    this.router.navigate(['/board/:id', {id: id}]);
  }
}
