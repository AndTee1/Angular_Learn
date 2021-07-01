import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  displayedColumns: string[] = ['id',"name","Phone","Address","Delete"];
  listStudent :any;
    
  constructor(
    private http: HttpClient,
    private router:Router
    
    ) {
    this.getList();
    
  }
    getList(){
      this.http.get('https://60d2bc7b858b410017b2e1fd.mockapi.io/customer').subscribe(res =>{
        console.log(res);
        this.listStudent = res;
      })
    }
    isDelete(a:any){
      this.http.delete('https://60d2bc7b858b410017b2e1fd.mockapi.io/customer/' + a.id).subscribe(
        res => {
          console.log(res);
          this.getList()
          
        }
      )
    }
    getbyID(item:any){
      this.http.get('https://60d2bc7b858b410017b2e1fd.mockapi.io/customer/' + item.id).subscribe(res =>{
        console.log(res);
        this.listStudent=res;
        this.router.navigate(['/edit', item.id]).then();
      })

    }    
    isDetails(item:any){
      this.http.get('https://60d2bc7b858b410017b2e1fd.mockapi.io/customer/' + item.id).subscribe(res =>{
        console.log(res);
        this.listStudent=res;
        this.router.navigate(['/details', item.id]).then();
      })

    }

  }
