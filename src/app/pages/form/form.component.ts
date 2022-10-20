import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form = new FormGroup ({
    username : new FormControl('Jittapol'),
    tel: new FormControl('0612063654'),
  });

  get username(): any {return this.form.get('username')}
  get tel(): any {return this.form.get('tel')}
  clearInput() { this.username.reset(); this.tel.reset(); }
  addInput(){alert(this.username.value+this.tel.value);}

  constructor() {}

  ngOnInit(): void {}
  }
