import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css'],
})
export class PrimeComponent implements OnInit {

  value = 0 ;
  isPrime(value: string) {
    const num = Number(value);
    for (let i = 2; i <= num; i++) {
      let flag = 0;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1;
          break;
        }
      }
      if (i > 1 && flag == 0) {
        console.log(i);
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
