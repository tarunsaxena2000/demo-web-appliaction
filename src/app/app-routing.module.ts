import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {component:AboutComponent,path:'about'},
  {component:HomeComponent,path:'home'},
  {path:'',redirectTo:"home",pathMatch:'full'},
  {component:LoginComponent,path:'login'},
  {component:SignupComponent,path:'signup'},
  {component:PageNotFoundComponentComponent,path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
