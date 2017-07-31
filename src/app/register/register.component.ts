import { Component, OnInit } from '@angular/core';
// import {User} from './register.interface'

import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   nid: string;
   fname: string;
   mname:string;
   lname: string;
   add1: string;
   add2: string;
   add3: string;
   pid: string;
   postcode: string;
   district: string;
   suburb: string;
   mobile: string;
   consent : string;
   email : string;
   seloptobj:string;
   devices:any[]
   i:string;
  constructor(public router: Router) { }
 
  ngOnInit() {
   this.onOptionClick()
  }

  registerOnClick(){
    const router = this.router;
    axios({
      method:'post',
      url:'http://129.232.230.155:3000/api/db/patient/add',
      headers : {'content-type': 'application/json'},
      data: 
      {
        patient:{
            nationalId: this.nid,
            firstName: this.fname,
            middleName:null,
            lastName: this.lname,
            addressLine1: this.add1,
            addressLine2: this.add2,
            addressLine3: this.add3,
            provinceId: this.seloptobj,
            postalCode: this.postcode,
            district: null,
            suburb: null,
            mobile: this.mobile,
            consent : true,
            email : this.email
        }
    }
    })
    .then(function(response) {
      // router.navigate(['/register']);
      // console.log(response);
    });
  }

 

 onOptionClick() {
   let _this = this;
    axios({
      method:'get',
      url:'http://129.232.230.155:3000/api/db/province/all',
     
    })
  .then(function(response) {
    _this.devices = response.data;
   
    });
  }


}

