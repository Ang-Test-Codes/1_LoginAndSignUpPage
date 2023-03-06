import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  signupUsers: any[] =[];
  signupObj: any ={
    username: '',
    email: '',
    password: ''
  };
  loginObj: any ={
    username: '',
    password: ''
  };  

  constructor() { }

  ngOnInit(): void {
  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem("signupUsers", JSON.stringify(this.signupUsers));
    this.signupObj={
      username: '',
      email: '',
      password: ''
    };
  }

  onLogIn(){}
}
