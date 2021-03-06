import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [{path :'' , component:HomeComponent},
{path :'about' , component:AboutComponent},
{path :'taskmanager' , component:TaskManagerComponent},
{path :'login' , component:LoginComponent},
{path:'**',component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

