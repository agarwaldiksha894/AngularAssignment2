import { Component, OnInit } from '@angular/core';
import { TimerService } from '../TimerService';

@Component({
  selector: 'app-clickcount',
  templateUrl: './clickcount.component.html',
  styleUrls: ['./clickcount.component.css']
})
export class ClickcountComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {

  }

 
}
