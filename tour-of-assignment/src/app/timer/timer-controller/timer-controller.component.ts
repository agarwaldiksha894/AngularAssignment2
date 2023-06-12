import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.css']
})
export class TimerControllerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() timerValue: number=0;
  isRunning: boolean=false;
  intervalId: any;
  startCount :number= 0;
  pauseCount :number= 0;

  @Output() startCountdown = new EventEmitter<number>();
  @Output() pauseCountdown = new EventEmitter<void>();
  @Output() resetCountdown = new EventEmitter<void>();
  @Output() multipleValues = new EventEmitter<any>();
  @Output() startCountChange = new EventEmitter<number>();
  @Output() pauseCountChange = new EventEmitter<number>();


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
      this.intervalId = setInterval(() => {
        this.timerValue--;
        this.startCountdown.emit(this.timerValue);
        if (this.timerValue <= 0) {
          this.pauseCountdown.emit();
          clearInterval(this.intervalId);
          this.isRunning = false;
        }
      }, 1000);
    }
  }

  onPause() {
    if (this.isRunning) {
      this.pauseCount++;
      this.pauseCountChange.emit(this.pauseCount);
      this.pauseCountdown.emit();
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }

  onReset() {
    this.pauseCount=0;
    this.startCount=0;
    this.startCountChange.emit(this.startCount);
    this.pauseCountChange.emit(this.pauseCount);
    this.resetCountdown.emit();
    clearInterval(this.intervalId);
    this.isRunning = false;
    this.timerValue = 0;
  }
}
