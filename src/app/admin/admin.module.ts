import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from './../shared/material.module';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    SignupComponent,
    UserComponent,
    UsersListComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
