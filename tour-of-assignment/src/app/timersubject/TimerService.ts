import { Injectable } from '@angular/core';
import { Subject, Observable, timer ,of} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timerSubject: Subject<number>;
  private startTime: number;
  private startCount : number =0;
  private pauseCount : number =0;

//   private timerObservable: Observable<number>;

//   private timerObservable: Observable<number> = new Observable<number>((observer) => {
   
//   });

  //private timerObservable: Observable<number> = of(0);

  private timerObservable: Observable<number> | null = null;
  private running : boolean =false;

  constructor() {
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
      this.timerObservable.subscribe();
    }
  }

  pauseTimer(isRunning:boolean): void {
    this.pauseCount++;
    
  
      this.timerObservable = null;  
    
  }

  resetTimer(): void {
    this.startCount++;
    this.timerSubject.next(1000);
  }

  getTime(): Observable<number> {
    return this.timerSubject.asObservable();
  }

  getStartCount() : number{
    return this.startCount;
  }

  getPauseCount() : number{
    return this.pauseCount;
  }
}
