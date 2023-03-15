import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  cal(a,b,c){
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    switch (c) {
      case "+":return a+b;break;
      case "-":return a-b;break;
      case "*":return a*b;break;
      case "/":return a/b;break;
    }
    if (a==NaN||b==NaN){
      return 0;
    }
  }
}
