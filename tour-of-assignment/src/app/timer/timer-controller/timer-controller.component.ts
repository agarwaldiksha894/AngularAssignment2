import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.css']
})
export class TimerControllerComponent implements OnInit {

  constructor(public datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  @Output() timerValue: number=0;
  isRunning: boolean=false;
  intervalId: any;
  startCount :number= 0;
  pauseCount :number= 0;
  maintainCurrentTime : any="";
   isStarted: boolean = false;
  isPaused: boolean = false;
  isReset: boolean = false;


   public startTimeValues: string[] = [];
   public pauseTimeValues: string[] = [];
   public resetTimeValues: string[] = [];
   private timer: any;

  @Output() startCountdown = new EventEmitter<number>();
  @Output() pauseCountdown = new EventEmitter<void>();
  @Output() resetCountdown = new EventEmitter<void>();
  @Output() multipleValues = new EventEmitter<any>();
  @Output() startCountChange = new EventEmitter<number>();
  @Output() pauseCountChange = new EventEmitter<number>();
  @Output() startTimeEvent = new EventEmitter<string[]>();
  @Output() pauseTimeEvent = new EventEmitter<string[]>();


  emitValues() {
    const value1 = this.startCount;
    const value2 = 'Output 2';
    const value3 = 'Output 3';

    this.multipleValues.emit({ value1, value2, value3 });
  }

  onStart() {
    if (this.timerValue > 0 && !this.isRunning) {
      // this.startCountdown.emit(this.timerValue);
      this.isRunning = true;
      this.startCount++;
      this.startCountChange.emit(this.startCount);
      this.isStarted = true;
      this.isPaused=false;
      this.isReset=false;
      this.showstartTimeValues(this.isStarted,this.isPaused,this.isReset);
      this.intervalId = setInterval(() => {
        this.timerValue--;
        this.startCountdown.emit(this.timerValue);
        if (this.timerValue <= 0) {
          this.pauseCountdown.emit();
          clearInterval(this.intervalId);
          this.isRunning = false;
        }
      }, 1000);

      console.log('startTimeValues'+this.startTimeValues);
      this.startTimeEvent.emit(this.startTimeValues);
    }
  }

  onPause() {
    if (this.isRunning) {
      this.isStarted = false;
      this.isPaused=true;
      this.isReset=false;
      this.showstartTimeValues(this.isStarted,this.isPaused,this.isReset);
      this.pauseCount++;
      this.pauseCountChange.emit(this.pauseCount);
      this.pauseCountdown.emit();
      this.pauseTimeEvent.emit(this.pauseTimeValues);
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }

  onReset() {
    this.pauseCount=0;
    this.startCount=0;
    this.isStarted = false;
    this.isPaused=false;
    this.isReset=true;
    this.showstartTimeValues(this.isStarted,this.isPaused,this.isReset);
    this.startCountChange.emit(this.startCount);
    this.pauseCountChange.emit(this.pauseCount);
    this.resetCountdown.emit();
    this.startTimeEvent.emit(this.startTimeValues);
    clearInterval(this.intervalId);
    this.isRunning = false;
    this.timerValue = 0;
  }

  showstartTimeValues(isStarted:boolean,isPaused:boolean,isReset:boolean): void {
    //const startDate = new Date(2020, 1, 14, 12, 38, 30); // Specify the start date and time
    const startDate = Date.now();
    //this.startTimeValues = [];

    this.timer = setInterval(() => {
      const currentDate = new Date();
      const currentTime = this.datePipe.transform(currentDate, 'dd-MM-yyyy hh:mm:ssa');
      this.maintainCurrentTime = currentTime;
      if (currentTime !== null) {
       
          //this.startTimeValues.push(currentTime);
        
        
      }
    }, 1000); // Update every second

    var currentStartTime = this.datePipe.transform(startDate, 'dd-MM-yyyy hh:mm:ssa');
    if(currentStartTime!=null){
      if(isStarted||isReset){
        currentStartTime= 'started at ' + currentStartTime;
        this.startTimeValues.push(currentStartTime);
      }
      if(isPaused){
        currentStartTime= 'paused at ' + currentStartTime;
        this.pauseTimeValues.push(currentStartTime);
      }
      
    }
    
  }

}
