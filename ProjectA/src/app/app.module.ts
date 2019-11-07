import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from './demo.service';
import { UsersComponent } from './users/users.component';
import { User } from './users';
import { CustomDirective } from './custom.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BikeComponent } from './bike/bike.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    CustomDirective,
    ParentComponent,
    ChildComponent,
    BikeComponent,
    BikeDetailsComponent,
    AddUserComponent,
    ViewUsersComponent,
    AddProductsComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'user', component:UsersComponent},
      {path: 'parent',component:ParentComponent},
      {path: 'bikes', component:BikeComponent},
      {path: 'users',component:AddUserComponent},
      {path: 'add', component:AddUserComponent},
      {path: 'view', component:ViewUsersComponent},
      {path: 'addP', component:AddProductsComponent},
      {path: 'movies', component:MoviesComponent}
      
    ]

    ),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
