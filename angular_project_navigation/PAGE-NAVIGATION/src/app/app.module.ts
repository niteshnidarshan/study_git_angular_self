import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { OthersComponent } from './others/others.component';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { UserdataService } from './services/userdata.service';
import { AjaxcomponentComponent } from './ajaxcomponent/ajaxcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxserviceService } from './ajaxservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    OthersComponent,
    SubComponentComponent,
    AjaxcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserdataService, AjaxserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
