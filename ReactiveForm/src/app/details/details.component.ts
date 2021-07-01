import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  StudentId:any;
  studentDetail: any;
  url='https://60d2bc7b858b410017b2e1fd.mockapi.io/student/';
  constructor(
    private http:HttpClient,
    private route: ActivatedRoute
  ) { 
    this.StudentId=this.route.snapshot.params.id;
      console.log(this.StudentId);
  }

  ngOnInit(): void {
    this.getStudentbyId(this.StudentId);
  }
  getStudentbyId(id:any){
    this.http.get(this.url+id).subscribe(res =>{
      this.studentDetail = res;
      console.log(this.studentDetail);
    })
  }
}