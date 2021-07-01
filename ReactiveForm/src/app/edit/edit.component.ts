import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder }from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student!:FormGroup;
  StudentId:any;
  studentDetail:any;
  submitted=false;
  url='https://60d2bc7b858b410017b2e1fd.mockapi.io/student/'
  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    public router1:Router
  ) { 
    this.StudentId=this.route.snapshot.params.id;
      console.log(this.StudentId);
  }
  
  ngOnInit(): void {
    this.getStudentbyId()
  }
  onInit(){
    this.student = this.fb.group({
      "name":['',[Validators.required,Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      "Phone":['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      "Address":['',Validators.required],
      "Gmail":['',[Validators.required,Validators.email]],
    })
  }
  get studentForm() { return this.student.controls; }
  addNew(){
    if(this.student.valid){
      this.http.put(this.url +this.StudentId,this.student.getRawValue()).subscribe(res =>{
        console.log(this.studentDetail);
        this.studentDetail=res;
        this.router1.navigate(['/']).then();
      })
    }
    
  }
  getStudentbyId(){
    this.http.get(this.url+this.StudentId).subscribe( (res:any) =>{
      this.studentDetail=res;
      this.onInit();
      this.student.controls.name.patchValue(this.studentDetail.name)
      this.student.controls.Phone.patchValue(this.studentDetail.Phone)
      this.student.controls.Address.patchValue(this.studentDetail.Address)
      this.student.controls.Gmail.patchValue(this.studentDetail.Gmail)
    })
  }
  checkPhoneNumber(str:any ):boolean {
    if (str.length < 12 && str.length >8) {
        return false;
    } else {
        return  true;
    }
  }

}
