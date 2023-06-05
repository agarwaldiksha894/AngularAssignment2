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

  timerValue: number=0;
  isRunning: boolean=false;
  intervalId: any;

  @Output() startCountdown = new EventEmitter<number>();
  @Output() pauseCountdown = new EventEmitter<void>();
  @Output() resetCountdown = new EventEmitter<void>();

  onStart() {
    if (this.timerValue > 0 && !this.isRunning) {
      this.startCountdown.emit(this.timerValue);
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.timerValue--;
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
      this.pauseCountdown.emit();
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }

  onReset() {
    this.resetCountdown.emit();
    clearInterval(this.intervalId);
    this.isRunning = false;
    this.timerValue = 0;
  }
}
