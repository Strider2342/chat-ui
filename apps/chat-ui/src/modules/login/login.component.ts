import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  registerMode: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  login(username: string, password: string): void {
    console.log('Logging in as ' + username);
  }

  register(username: string, password: string, passwordconfirm: string): void {
    console.log('Signing up as ' + username);
  }

  changeToRegister(value: boolean): void {
    this.registerMode = value;
  }
}
