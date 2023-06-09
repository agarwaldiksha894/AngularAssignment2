import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-logger',
  templateUrl: './timer-logger.component.html',
  styleUrls: ['./timer-logger.component.css']
})
export class TimerLoggerComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  @Input() startTimeLogs : string[] = [];
  @Input() pauseTimeLogs : string[] = [];

  //@Input() logTimestamp: string = new Date().toLocaleString();
  
  logTimestamp(action: string) {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${action}`);
  }

}
