import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  list:Array<number>=[1,2,3,4,5,6,7,8,9];
  constructor() { }

  ngOnInit(): void {
  }

}
