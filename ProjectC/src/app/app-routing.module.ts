import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.gaurd';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'add-products', component:AddProductsComponent,
canActivate: [AuthGuard]},
  { path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  { path: '**', component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
