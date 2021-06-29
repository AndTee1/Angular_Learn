import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  listStudent :any;
 
  constructor(
    private http: HttpClient,
    private router:Router
    
  ) { 
    
  }

  ngOnInit(): void {
  }
  isSignin(){
    this.http.get('https://60d2bc7b858b410017b2e1fd.mockapi.io/customer').subscribe(res =>{
        console.log(res);
        this.listStudent=res;
        for(let student of this.listStudent){
          if(student.Username==(<HTMLInputElement>document.getElementById('name')).value && student.Password==(<HTMLInputElement>document.getElementById('pass')).value){
            console.log("succes");
            this.router.navigate(['/list']).then();
            
          }
          else{
            (<HTMLInputElement>document.getElementById('error')).style.display="block";          }
          
  
          
        }
        
        
      })
  }
}
