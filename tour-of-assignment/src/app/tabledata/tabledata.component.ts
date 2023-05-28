import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {

  tableData: any[]=[];
  initialData: any[]=[];
  tableHeaders: string[]=[]; 
  sortDirection: string[]=[];
  constructor() { }

  ngOnInit(): void {


    this.initialData  = 
    [
        {
          name: "Aname",
          classStd: "1",
          section: "A",
          sub1: "30",
          sub2: "40",
          sub3: "60",
          
        },
        {
            name: "Bname",
            classStd: "3",
            section: "D",
            sub1: "40",
            sub2: "70",
            sub3: "90",
            
        },
        {
            name: "Cname",
            classStd: "4",
            section: "B",
            sub1: "40",
            sub2: "60",
            sub3: "10",
            
        },
        {
            name: "Dname",
            classStd: "3",
            section: "C",
            sub1: "20",
            sub2: "70",
            sub3: "50",
            
        }
    ];

    this.tableData = [...this.initialData];

    this.tableHeaders = Object.keys(this.tableData[0]);
    this.sortDirection = this.tableHeaders.map(() => '');
  }



  sortBy(header: string) {
    const headerIndex = this.tableHeaders.indexOf(header);

    if (this.sortDirection[headerIndex] === '') {
      // Sort in ascending order
      this.tableData.sort((a, b) => (a[header] > b[header] ? 1 : -1));
      this.sortDirection[headerIndex] = 'asc';
    } else if (this.sortDirection[headerIndex] === 'asc') {
      // Sort in descending order
      this.tableData.sort((a, b) => (a[header] < b[header] ? 1 : -1));
      this.sortDirection[headerIndex] = 'desc';
    } else {
      // Reset the data to the initial order
      this.tableData = [...this.initialData];
      this.sortDirection[headerIndex] = '';
    }
  }
}
