import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { combineLatest } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BusComponent } from './bus/bus.component';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';
import { PlaneComponent } from './plane/plane.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    HeaderComponent,
    FooterComponent,
    DataBindingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    PageNotFoundComponent,
    BusComponent,
    CarComponent,
    BikeComponent,
    PlaneComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {path: 'about', component: AboutComponent,children:[
        {path: 'bus', component:BusComponent},
        {path: 'car', component:CarComponent},
        {path: 'bike', component:CarComponent},
        {path: 'plane', component:PlaneComponent},
      ]},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
