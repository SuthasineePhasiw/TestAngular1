import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  head = 'Hello World';
  name = 'Sutasinee Phasiw';
  position = 'Fornt-end Developer';
  description = 'Hello, I am Immage. I useed to be an intern as an HTML Editor. I have a good understanding of HTML CSS SCSS. Now, I am leaning how to use Angular and I am very responsible and able to socialize.';

  constructor() { }

  ngOnInit(): void {
  }

}
