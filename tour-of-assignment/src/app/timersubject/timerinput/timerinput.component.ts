import { Component, OnInit ,OnDestroy} from '@angular/core';
import { TimerService } from '../TimerService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timerinput',
  templateUrl: './timerinput.component.html',
  styleUrls: ['./timerinput.component.css']
})
export class TimerinputComponent implements OnInit ,OnDestroy {
  
  duration: number=1000;
  isRunning : boolean = false;
  isStartTimeValuesShown : boolean = false;
  isPauseTimeValuesShown : boolean = false;
  isResetTimeValuesShown : boolean = false;
  intervalSubscription: Subscription | undefined;
  emittedValue: number;

  constructor(private timerService: TimerService) { 
    this.emittedValue=0;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.timerService.stopShowTimer() // Clear the timer when the component is destroyed
    
  }

  start(): void {
    if (this.duration) {
      this.isRunning=true;
      this.timerService.startTimer(this.isRunning,this.duration);
     // this.timerService.startIntervalTimer(this.isRunning,this.duration);
      //this.timerService.showstartTimer();
    }
  }

  showStartTime():void{
    this.isStartTimeValuesShown = true;
    //this.timerService.showstartTimeValues(this.isStartTimeValuesShown,this.isPauseTimeValuesShown,this.isResetTimeValuesShown);
    //this.timerService.showstartTimeValues();
  }

  pause(): void {
    this.isRunning=!this.isRunning;
    this.timerService.pauseTimer(this.isRunning);
  }

  reset(): void {
    this.timerService.resetTimer();
  }


  startInterval() {
    this.intervalSubscription = this.timerService.startInterval().subscribe((value: number) => {
      this.emittedValue = value;
    });
  }

  stopInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
