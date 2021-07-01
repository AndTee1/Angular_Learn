import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[]=["id","name","phone","address","gmail","chucnang"]
  dataSource:any;
  datasearch:any;
  constructor(
    public http: HttpClient,
    public router: Router

  ) {
    this.getList();
    
   }

  ngOnInit(): void {
    
  }
  getList(){
    this.http.get('https://60d2bc7b858b410017b2e1fd.mockapi.io/student').subscribe(res =>{
      console.log(res);
      this.dataSource = res;
    })
  }
  getbyID(item:any){
    this.http.get('https://60d2bc7b858b410017b2e1fd.mockapi.io/student/' + item.id).subscribe(res =>{
      console.log(res);
      this.dataSource=res;
      this.router.navigate(['/edit', item.id]).then();
    })

  }    
  isDetails(item:any){
    this.http.get('https://60d2bc7b858b410017b2e1fd.mockapi.io/student/' + item.id).subscribe(res =>{
      this.router.navigate(['/details', item.id]).then();
    })

  }
  getSearch(){
    
  
  }
  isDelete(item:any){
    this.http.delete('https://60d2bc7b858b410017b2e1fd.mockapi.io/student/' + item.id).subscribe(res =>{
      console.log(res);
      this.getList();
      
    })

  }
}
