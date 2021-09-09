import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupConfirmPageComponent } from './signup-confirm-page/signup-confirm-page.component';
import { DemoComponent } from './demo/demo.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { Demo1Component } from './demo1/demo1.component';




const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signuppage', component: SignupPageComponent },
  { path: 'signupconfirmpage', component: SignupConfirmPageComponent },
  { path: 'signuppagedata', component: Demo1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SignupConfirmPageComponent,
    DemoComponent,
    HomePageComponent,
    Demo1Component,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
