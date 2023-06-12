import { Injectable } from '@angular/core';
import { Subject, Observable, timer ,of,interval} from 'rxjs';
import { tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timerSubject: Subject<number>;
  private startTime: number;
   public startCount : number =0;
   public pauseCount : number =0;
   //showTimerValues=false;
    maintainCurrentTime : any="";
   isStarted: boolean = false;
  isPaused: boolean = false;
  isReset: boolean = false;


   public startTimeValues: string[] = [];
   public pauseTimeValues: string[] = [];
   public resetTimeValues: string[] = [];
   private timer: any;
//   private timerObservable: Observable<number>;

//   private timerObservable: Observable<number> = new Observable<number>((observer) => {
   
//   });

  //private timerObservable: Observable<number> = of(0);

  private timerObservable: Observable<number> | null = null;
  private running : boolean =false;

  constructor(public datePipe: DatePipe) {
    this.timerSubject = new Subject<number>();
    this.startTime = 0;
  }




  
  startTimer(isRunning:boolean ,duration: number): void {

    if (!this.timerObservable) {
      this.startTime = Date.now();
      this.timerObservable = timer(0, 1000).pipe(
        tap(() => {
          const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
          const remainingTime = duration - elapsedTime;
          this.timerSubject.next(remainingTime);
        })
      );
      this.startCount++;
      this.isStarted = true;
    this.isPaused = false;
    this.isReset = false;
      console.log("in startCount", this.startCount);
    
     
      //this.showstartTimeValues();
      this.showstartTimeValues(this.isStarted,this.isPaused,this.isReset);
      this.timerObservable.subscribe();
    }
  }


  
  pauseTimer(isRunning:boolean): void {
    this.pauseCount++;
    this.isStarted = false;
    this.isPaused = true;
    this.isReset = false;

    this.showstartTimeValues(this.isStarted,this.isPaused,this.isReset);
    console.log("in pauseTimer", this.pauseCount);
      this.timerObservable = null;  
    
  }

  resetTimer(): void {

    this.isStarted = false;
    this.isPaused = false;
    this.isReset = true;
    this.startCount=0;
    this.pauseCount=0;
 
    //this.showstartTimeValues();
    this.showstartTimeValues(this.isStarted,this.isPaused,this.isReset);
    console.log("in resetTimer", this.startCount);
    this.timerSubject.next(1000);
  }

  getTime(): Observable<number> {
    return this.timerSubject.asObservable();
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

  stopShowTimer():void{
    clearInterval(this.timer);
  }

  pushStartTimeValues():void{
    this.startTimeValues.push(this.maintainCurrentTime);
  }

  startInterval(): Observable<number> {
    return interval(1000);
  }
}
