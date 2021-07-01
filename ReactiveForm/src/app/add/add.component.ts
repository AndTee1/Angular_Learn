import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 student!:FormGroup;
 submitted=false;
 
  constructor(
    public fb : FormBuilder,
    public http:HttpClient,
    public router:Router,
    
   
  ) { }

  ngOnInit(): void {
    this.student = this.fb.group({
      "name":["",[Validators.required,Validators.maxLength(255),Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      "Phone":["",[Validators.required, Validators.pattern('^[0-9]+$')]],
      "Address":["",Validators.required],
      "Gmail":["",[Validators.required,Validators.email]]
    })
  }
  get studentForm() { return this.student.controls; }
  
  addNew(){
   
      this.submitted=true;
      
      if(this.student.valid && this.checkPhoneNumber(this.student.controls.Phone.value)==false){
        this.http.post(('https://60d2bc7b858b410017b2e1fd.mockapi.io/student'), this.student.getRawValue()).subscribe(res =>{
        console.log(res);
        this.router.navigate(['/']).then();
      })
      
    
  }
}
checkPhoneNumber(str:any ):boolean {
  if (str.length < 12 && str.length >8) {
      return false;
  } else {
      return  true;
  }
}
    
}
