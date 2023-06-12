import { Component, OnInit } from '@angular/core';
import { TimerService } from '../TimerService';

@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.css']
})
export class TimelogComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

  timestamps: string[] = [];

  logTimestamp(timestamp: string): void {
    this.timestamps.push(timestamp);
  }

}
