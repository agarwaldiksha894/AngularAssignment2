import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  timerValue: number=0;
  startCount : number =0;
  pauseCount : number =0;
  startTimeV : any = new Date();
  pauseTimeV: any = new Date();
  startCountdown(timer: number) {
    console.log('in startCountdown'+ this.timerValue);
    this.timerValue = timer;
  }

  handleMultipleValues(values: any) {
    // Handle the emitted output values
    
    console.log('handleMultipleValues ' + values.value1);
    console.log(values.value2);
    console.log(values.value3);
  }

  handleStartCountChange(count: number) {
    // Handle the startCount value received from TimerControllerComponent
    console.log('handleStartCountChange '+count);
    this.startCount = count;
  }

  handlePauseCountChange(count: number) {
    // Handle the startCount value received from TimerControllerComponent
    console.log('handleStartCountChange '+count);
    this.pauseCount = count;
  }
  
  startTimeEventLogs(startTime : any){
    console.log('in startTimeEventLogs')
    console.log('startTimeEventLogs'+startTime);
    this.startTimeV = startTime;
  }

  pauseTimeEventLogs(pauseTime : any){
    this.pauseTimeV = pauseTime;
  }
}
