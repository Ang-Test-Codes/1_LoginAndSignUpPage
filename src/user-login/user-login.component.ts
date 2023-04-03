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
    const localData = localStorage.getItem("signupUsers");
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
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

  onLogIn(){
    const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username
                                            && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert("User Loged in Successessfully!");
    }
    else{
      alert("Invalide Credentials!\nPlease try again!");
    }
  
  }
}
