import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  //loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    // this.loginForm=new FormGroup(
    //   {
    //     email: new FormControl('',[Validators.required, Validators.email]),
    //     password: new FormControl('',[Validators.required, Validators.minLength(6)])
    //   }
    // );
  }

  LoginUser(){
    if(this.email=="ayubansari@gmail.com" && this.password=="123456")
    {
      console.log("Welcome")
    }
    else{
      console.log("Not authorised")
    }
  }
}
