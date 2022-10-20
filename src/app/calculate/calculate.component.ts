import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
   @Input() num:number = 0;
   @Output() numberchange = new EventEmitter();

   getValue() {
    console.log("getValue")
    this.numberchange.emit(this.num);
   }
  constructor() { }

  ngOnInit(): void {
  }

}
