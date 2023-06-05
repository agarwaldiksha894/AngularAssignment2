import { Component, OnInit } from '@angular/core';
import { TimerService } from '../TimerService';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  countdown: number=1000;
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {

    this.timerService.getTime().subscribe((time) => {
      this.countdown = time;
    });

  }

}
