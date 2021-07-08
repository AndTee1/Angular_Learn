import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product, Products } from '../Product.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  message!:string;
  products: Product[] = Products;
  title = 'FPT Phone Shop';
  selectedProduct?:Product;
   setSelectProduct(p:Product) {
    this.selectedProduct = p;
  } 
  // product: Product|undefined;
  newcomponent = "New Component";                        
  todayDate!: Date;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message: string) => this.message = message);
    this.todayDate = this.data.showTodayDate(); 
 
  }
  

}
