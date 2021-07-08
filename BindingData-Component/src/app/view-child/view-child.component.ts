import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit  {
  @ViewChild(ProductDetailComponent) view:any;
 
  message!: string;

  
  constructor() { }

  ngAfterViewInit(){
    this.message= this.view.message
   console.log("aihi");
   console.log(this.view.message);
   
   
  }

}
