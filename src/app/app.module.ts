import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
// bootsrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// materials
import { MaterialModule } from './shared/material.module';
// animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tooastr module
import { ToastrModule } from 'ngx-toastr';
// routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavtabsComponent } from './shared/navtabs/navtabs.component';

// component
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './shared/verify-email/verify-email.component';
// user modules
import { AdminModule} from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';
import { SiteoperatorModule } from './siteoperator/siteoperator.module';
import {SitesupervisorModule} from './sitesupervisor/sitesupervisor.module';


import { BeforsigninComponent } from './shared/beforsignin/beforsignin.component';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import {AuthService} from '../app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NavtabsComponent,
    ContactComponent,
    BeforsigninComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    NgbModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    ManagerModule,
    SiteoperatorModule,
    SitesupervisorModule,
    AngularFireModule.initializeApp(environment.firebase, 'realhydro'),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
  ],
  providers: [AuthService, { provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
