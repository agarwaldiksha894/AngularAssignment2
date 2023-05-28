import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicdiv',
  templateUrl: './dynamicdiv.component.html',
  styleUrls: ['./dynamicdiv.component.css']
})
export class DynamicdivComponent implements OnInit {

  divs: number[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.generateDivs();

  }

  
  generateDivs() {
    for (let i = 1; i <= 10; i++) {
      this.divs.push(i);
    }
  }

  onButtonClick(divNumber: number) {
    alert(`Button '${divNumber}' is clicked.`);
  }

  onScroll() {
    const newDivs = this.divs.length + 1;

    for (let i = this.divs.length + 1; i <= newDivs + 10; i++) {
      this.divs.push(i);
    }
  }


}
