import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss']
})
export class SummaryTableComponent implements OnInit {
  table=[{
    id:1,
    name:"Acetone",
    available_quantity:40,
    used_quantity:100
  },{
    id:1,
    name:"Acetone",
    available_quantity:40,
    used_quantity:100
  },{
    id:1,
    name:"Acetone",
    available_quantity:40,
    used_quantity:100
  },{
    id:1,
    name:"Acetone",
    available_quantity:40,
    used_quantity:100
  },{
    id:1,
    name:"Acetone",
    available_quantity:40,
    used_quantity:100
  },{
    id:1,
    name:"Acetone",
    available_quantity:40,
    used_quantity:100
  },]
  constructor() { }

  ngOnInit() {
  }


 


}
