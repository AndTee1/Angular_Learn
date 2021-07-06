import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
interface Student{
  id:number;
 
}
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  student!:FormGroup;
  submitted=false;
  public form!:{
    students: Student[]
  }
  constructor(
    public fb : FormBuilder,
    public http:HttpClient,
    public router:Router,
  ){
    
    this.form={
      students: []
    }
    this.student = this.fb.group({
      "name":["",[Validators.required,Validators.maxLength(255),Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      "Phone":["",[Validators.required, Validators.pattern('^[0-9]+$')]],
      "Address":["",Validators.required],
      "Gmail":["",[Validators.required,Validators.email]]
    })
  }
  ngOnInit():void{
   
  }
  public addNew(e:any) :void{
    e.preventDefault();
    this.form.students.push({
			id: Date.now(), 
			
		});
 
  }
  get studentForm() { return this.student.controls; }
  public removeStudent( index: number ) : void {
 
		this.form.students.splice( index, 1 );
 
	}
  checkPhoneNumber(str:any ):boolean {
    if (str.length < 12 && str.length >8) {
        return false;
    } else {
        return  true;
    }
    }
    addStudent(){
      this.submitted=true;
      
      if(this.student.valid && this.checkPhoneNumber(this.student.controls.Phone.value)==false){
        this.http.post(('https://60d2bc7b858b410017b2e1fd.mockapi.io/student'), this.student.getRawValue()).subscribe(res =>{
        console.log(res);
        this.router.navigate(['/']).then();
      }) 
      }
    }
}


