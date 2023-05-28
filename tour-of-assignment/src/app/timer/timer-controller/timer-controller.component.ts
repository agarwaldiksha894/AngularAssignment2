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

  @Output() startCountdown = new EventEmitter<number>();

  onStart() {
    this.startCountdown.emit(this.timerValue);
  }

  onPause() {
    // Pause functionality
  }

  onReset() {
    // Reset functionality
  }
}
