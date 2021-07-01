import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    SigninComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forRoot([
      {path: "", component: SigninComponent},
      {path: "list",component: ListComponent},
      {path:"add",component:AddComponent},
      {path:"edit/:id",component:EditComponent},
      {path:"details/:id",component:DetailsComponent}
    ])
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
