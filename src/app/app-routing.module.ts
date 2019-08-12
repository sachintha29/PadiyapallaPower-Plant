import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './shared/signin/signin.component';
import { BeforsigninComponent } from './shared/beforsignin/beforsignin.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './shared/verify-email/verify-email.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'about', component : AboutComponent},
  { path : 'contact', component: ContactComponent},
  { path : 'beforesignin', component : BeforsigninComponent},
  { path : '', redirectTo: '/admin/signin' , pathMatch: 'full'},
  { path : '', redirectTo: '/manager/signin' , pathMatch: 'full'},
  { path : '', redirectTo: '/operator/signin' , pathMatch: 'full'},
  { path : '', redirectTo: '/supervisor/signin' , pathMatch: 'full'},

  { path : 'forgot-password', component: ForgotPasswordComponent},
  {path : 'vertify-email', component : VerifyEmailComponent},
  { path: '',   redirectTo: '/admin', pathMatch: 'full'},
  { path: '',   redirectTo: '/manager', pathMatch: 'full'},
  {path: '', redirectTo: '/operator', pathMatch: 'full'},
  {path: '', redirectTo: '/supervisor', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
