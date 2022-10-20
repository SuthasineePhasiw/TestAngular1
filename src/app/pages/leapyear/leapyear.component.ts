import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leapyear',
  templateUrl: './leapyear.component.html',
  styleUrls: ['./leapyear.component.css']
})
export class LeapyearComponent implements OnInit {

  value = 0;
  
  leapYear(value:string){
    const year = Number(value);
    if(year % 400 == 0){
        window.alert("true");
    }else if(year % 400 != 0 && year % 100 != 0 && year % 4 == 0){
        window.alert("true");
    }else{
      window.alert("False")
    }
}
  constructor() { }

  ngOnInit(): void {
  }

}
