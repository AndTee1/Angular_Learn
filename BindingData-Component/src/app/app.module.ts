import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ViewChildComponent,
    DemoComponent,
    ProductDetailComponent,
    ServiceComponent,
    ServiceDemoComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: DemoComponent},
      {path: "input", component: InputComponent},
      {path: "viewchild", component: ViewChildComponent},
      {path: "service", component: ServiceDemoComponent},

      
    ]),
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
