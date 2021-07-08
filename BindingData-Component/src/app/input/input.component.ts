import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product, Products } from '../Product.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @ViewChildren(ProductDetailComponent) childrenComponent!: QueryList<ProductDetailComponent>;
  products: Product[] = Products;
  title = 'FPT Phone Shop';
  selectedProduct?:Product;
  mgs?:string;
  message:string = "";
  show = true;
  setSelectProduct(p:Product) {
    this.selectedProduct = p;
  } 
  notifyMessage($event: any) {
    this.mgs = 'Có yêu cầu đặt hàng ' + $event.nameproduct;
    console.log("ahai");
    
    
  }
  receiveMessage($event: any) {
    this.message = $event;
  }
  constructor() { }

  public ngAfterViewChecked() {
    console.log('AppComponent==>AfterViewChecked');
    console.log(this.childrenComponent);
    // this.childrenComponent.changes.subscribe((comps: QueryList<ProductDetailComponent>) =>
    //   {
    //     console.log(comps.first.message);
    //     this.message = comps.first.message;
    //   });
  }

}
