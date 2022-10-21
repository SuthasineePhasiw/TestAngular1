import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css'],
})
export class FizzbuzzComponent implements OnInit {
  Fizzbuzz(num:number) {
    for (let i = 1; i <= num; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
      } else if (i % 5 == 0) {
        console.log('Buzz');
      } else if (i % 3 == 0) {
        console.log('Fizz');
      } else {
        console.log(i);
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
