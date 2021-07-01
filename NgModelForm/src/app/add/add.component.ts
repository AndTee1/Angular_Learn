import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Model/Student.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  studentNew: Student = new Student();
  
  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    private router:Router
   
  ) {
    
  }
  ngOnInit(): void {
  }
 
  Add(){
    if(this.studentNew.name==null || this.studentNew.Phone==null){
      
     console.log("error");
     
      
    }
    else{
      this.http.post('https://60d2bc7b858b410017b2e1fd.mockapi.io/customer',this.studentNew).subscribe(res =>{
        console.log(res);
        window.alert("Thêm Thành Công!");
        this.router.navigate(['/']).then();
      })
    }
  
    }
      
}
