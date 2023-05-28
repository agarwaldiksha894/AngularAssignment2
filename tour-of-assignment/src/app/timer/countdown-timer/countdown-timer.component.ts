import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() timer: number=0;
  currentTime: number=0;

  startCountdown() {
    this.currentTime = this.timer;
    const intervalId = setInterval(() => {
      if (this.currentTime > 0) {
        this.currentTime--;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }
}
