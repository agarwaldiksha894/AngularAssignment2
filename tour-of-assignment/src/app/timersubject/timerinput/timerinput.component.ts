import { Component, OnInit } from '@angular/core';
import { TimerService } from '../TimerService';

@Component({
  selector: 'app-timerinput',
  templateUrl: './timerinput.component.html',
  styleUrls: ['./timerinput.component.css']
})
export class TimerinputComponent implements OnInit {
  
  duration: number=1000;
  isRunning : boolean = false;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  start(): void {
    if (this.duration) {
      this.isRunning=true;
      this.timerService.startTimer(this.isRunning,this.duration);
    }
  }

  pause(): void {
    this.isRunning=!this.isRunning;
    this.timerService.pauseTimer(this.isRunning);
  }

  reset(): void {
    this.timerService.resetTimer();
  }
}
