import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  nid:string;
  fname:string;
  lname:string;
  opts: boolean[] = [false, false, false]
  patients:any[]

  constructor(private router: Router) { }

  ngOnInit() {
  }
   
  searchOnClick(){
  //  let patients = this.patients
  let _this = this;
   axios({
      method:'post',
      url:'http://129.232.230.155:3000/api/db/patient/find',
      headers : {'content-type': 'application/json'},
      data: {
        nationalId: '%'+this.nid+'%',
        firstName: this.fname,
        lastName:this.lname
      }
    })
    .then(function(response) {
      // patients = response;
      _this.patients = response.data;
      // _this.patients.map((patient, index) => {
      //   patient.con = "cell content"+(index+1);
      // });
      
      // console.log("AAAAAA", _this.patients);

    
    });
  // console.log(this.opts);
   
}
  nextOnClick(){
    var flag= false;
    this.opts.map(opt=>{
      if(opt == true)
        flag= true;
    });
    
    if(flag)
    {
      this.router.navigate(['/tb-screening']);
    }
  }

}
