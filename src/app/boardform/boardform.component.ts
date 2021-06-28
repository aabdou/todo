import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { TaskBoard } from 'src/models/taskboard';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-boardform',
  templateUrl: './boardform.component.html',
  styleUrls: ['./boardform.component.css']
})
export class BoardformComponent implements OnInit {
  board: TaskBoard = new TaskBoard();

  constructor(private router: Router, private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit(): void {
  }

  save() {
    if (this.board!.id == 0 && this.board.name != "") {
      this.board!.id = this.boardService.addBoard(this.board!);
      this.router.navigate(['/boards']);

    }
  
  }

}
