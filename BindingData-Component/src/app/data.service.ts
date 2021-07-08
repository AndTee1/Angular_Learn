import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('Default message');
  currentMessage = this.messageSource.asObservable();
  selectedProduct?:Product;
  setSelectProduct(p:Product) {
    this.selectedProduct = p;
  }
  
  showTodayDate() { 
    let today = new Date(); 
    return today;
  } 
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
