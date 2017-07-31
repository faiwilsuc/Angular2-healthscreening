import { Component, OnInit } from '@angular/core';
import axios from 'axios';
// import {Question} from './tbdb';
@Component({
  selector: 'app-tb-screening',
  templateUrl: './tb-screening.component.html',
  styleUrls: ['./tb-screening.component.scss']
})


export class TbScreeningComponent implements OnInit {
 
  //  options = [
  //   {name:'OptionA', value:'0', checked:false},
  // ]
  options: boolean[]=[false, false, false, false, false, false, false, false, false, false,false,false];
  // optionss: boolean[]=[false, false,false,false];
  patients: any[];
  // patients: string;
  questions = [
    {id: 1, q:'1.Has the patient been coughing for two weeks or more?'},
    {id: 2, q:'2.Has the patient recently coughed blood in the sputum?'},
    {id: 3, q:'3.Has the patient experienced loss of appetite?'},
    {id: 4, q:'4.Has the patient lost weight of more than 3kg in the past four weeks?'},
    {id: 5, q:'5.Has the patient been sweating unusually at night?'},
    {id: 6, q:'6.Has the patient had recurrent fever /chills lasting more than three days?'},
    {id: 7, q:'7.Has the patient experienced chest pains, fast breathing and/or difficulty in breathing?'},
    {id: 8, q:'8.Does the patient have swellings in the neck, armpits or elsewhere?'},
   
  ] 

  comqs = [
     {id: 9, q:'9.i) Has the  patient been treated for Tuberculosis?'},
    {id: 10, q:'ii) When was the patient treated for Tuberculosis?'},
    {id: 11, q:'10.Was TB treatment completed?'},
    {id: 12, q:'11.Has the patient been in contact with someone diagnosed with Tuberculosis in the past year, e.g. same house hold or at work?'},
  ]
  // questions:Question[];
  constructor() { }

  ngOnInit() {
    this.screeningClick()
  }

  screenClick(){
    // console.log(this.options);
    axios({
      method:'post',
      url:'http://129.232.230.155:3000/api/db/question/find',
      headers : {'content-type': 'application/json'},
      data: {
        // screeningId:this.options.map(opt=>opt)
       screeningId: "3"
      }
    })
    .then(function(response) {
      console.log(response);
    });

  }

  screeningClick(){
    // console.log(this.options);
   let _this = this;
   axios({
      method:'post',
      url:'http://129.232.230.155:3000/api/db/patient/find',
      headers : {'content-type': 'application/json'},
      data: {
        nationalId: "%77%",
        firstName: "",
        lastName:""
      }
    })
    .then(function(response) {
      // patients = response;
      _this.patients = response.data;
        
      console.log("AAAAAA", _this.patients);

    
    });
  // console.log(this.opts);
   
  }
  onSubmit(){
    // console.log(this.options);
   let _this = this;
   axios({
      method:'post',
      url:'http://129.232.230.155:3000/api/db/patient/screening',
      headers : {'content-type': 'application/json'},
      data: {
       patientId:"2",
       screeningId:"8",
       facilityName:"",
       tbTreatmentDate:"2017-05-18T23:04:43.541Z",
       answers:[{"qId":95,"aId":2},{"qId":96,"aId":2},{"qId":97,"aId":2},{"qId":98,"aId":2},{"qId":99,"aId":2},{"qId":100,"aId":2},{"qId":101,"aId":1},{"qId":102,"aId":2},{"qId":103,"aId":2},{"qId":105,"aId":2},{"qId":106,"aId":2}]

      }
    })
    .then(function(response) {
      // patients = response;
     
        
      console.log("fff", response);

    
    });
  // console.log(this.opts);
   
}


}
