import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-out',
  templateUrl: './login-out.component.html',
  styleUrls: ['./login-out.component.scss']
})
export class LoginOutComponent implements OnInit {
  user: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleOnClick(){
    const router = this.router;
    axios({
      method:'post',
      url:'http://129.232.230.155:3000/authenticate',
      headers : {'content-type': 'application/json'},
      data: {
        username: this.user,
        password: this.password
      }
    })
    .then(function(response) {
      router.navigate(['/register']);
      //console.log(response);
    });
    
  }
  // signup(event) {
  //   event.preventDefault();
  //   this.router.navigate(['signup']);
  // }
}
