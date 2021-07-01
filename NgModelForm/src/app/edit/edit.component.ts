import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { _getShadowRoot } from '@angular/cdk/platform';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Model/Student.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  StudentId:any;
  studentDetail: any;
  url='https://60d2bc7b858b410017b2e1fd.mockapi.io/customer/';
  constructor(
    private http:HttpClient,
    private route: ActivatedRoute
  ) {
    this.StudentId=this.route.snapshot.params.id;
      console.log(this.StudentId);
  }

    ngOnInit() {
      this.getStudentbyId(this.StudentId);
    }

    getStudentbyId(id:any){
      this.http.get(this.url+id).subscribe(res =>{
        this.studentDetail = res;
        console.log(this.studentDetail);
      })
    }
    Edit(id:any){
      if(this.studentDetail.name==null||this.studentDetail.Phone==null){
        console.log("error");
        

      }else{
        this.http.put(this.url +id,this.studentDetail).subscribe(res =>{
          console.log(this.studentDetail);
          window.alert("Sửa Thành Công!")
        })
      }
      

    }
   
  



}
