import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startClickCount = 0;
  pauseClickCount = 0;

  incrementStartClick() {
    this.startClickCount++;
  }

  incrementPauseClick() {
    this.pauseClickCount++;
  }

}
