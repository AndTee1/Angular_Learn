import { Component, OnInit, Input, Output, EventEmitter,AfterViewInit, ViewChild } from '@angular/core';

import { Product } from '../Product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit  {
  message="Anh";
  @Input() product!:Product;
  @Input('title') titlebox!: string;
  @Output() dathangEvent = new EventEmitter<Product>();
  title! :string;

  
  @Output() messageEvent = new EventEmitter<string>();
  buyNow() {
    this.dathangEvent.emit(this.product);    
    console.log("test:"+this.product);

  }
  showTodayDate() { 
    
    return this.message ;
  } 
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
  constructor() { }
  ngOnInit() {
  }
  
}
