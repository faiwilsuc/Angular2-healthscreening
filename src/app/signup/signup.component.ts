import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Http } from '@angular/http';
import axios from 'axios';

@Component({
  moduleId:module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user:string;
  password: string;
  nId:string;
  lname:string;
  fname:string;
  email:string;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  SignUpClick()
  {
   const router = this.router;
   axios({
      method:'post',
      url:'http://129.232.230.155:3000/authenticate/signup',
      headers : {'content-type': 'application/json'},
      data: {
        username: this.user,
        password: this.password,
        nationalid:this.nId,
        lastname:this.lname,
        firstname:this.fname,
        email:this.email
      }
    })
    .then(function(response) {
      console.log(response);
      router.navigate(['login']);
    });
  }
  // login(event) {
  //   event.preventDefault();
  //   this.router.navigate(['login']);
  // }
}
