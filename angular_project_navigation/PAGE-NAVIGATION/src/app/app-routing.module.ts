import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OthersComponent } from './others/others.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AjaxcomponentComponent } from './ajaxcomponent/ajaxcomponent.component'

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"others", component:OthersComponent},
  {path:"contact", component:ContactComponent},
  {path:"about", component:AboutComponent},
  {path:"login", component:LoginComponent},
  {path:"ajaxCall", component:AjaxcomponentComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
