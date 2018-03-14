import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsolepageComponent } from './consolepage/consolepage.component';
import { SignupComponent } from './signup/signup.component';
const appRoute: Routes = [{ path: 'console', component: ConsolepageComponent }, 
{ path: 'login', component: LoginComponent },{path: 'signup', component: SignupComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsolepageComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
