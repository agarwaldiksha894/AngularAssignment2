import { Component, OnInit } from '@angular/core';
import { TimerService } from '../TimerService';

@Component({
  selector: 'app-clickcount',
  templateUrl: './clickcount.component.html',
  styleUrls: ['./clickcount.component.css']
})
export class ClickcountComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  startClickCount = 0;
  pauseClickCount = 0;

  incrementStartCount(): void {
    this.startClickCount= this.timerService.getStartCount();
  }

  incrementPauseCount(): void {
   this.pauseClickCount= this.timerService.getPauseCount();
  }
}
