import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from './../shared/material.module';
import { UserComponent } from './user/user.component';

import { AddUserComponent } from './add-user/add-user.component';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import {SigninComponent} from './signin/signin.component';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig, MatPaginatorModule } from '@angular/material';
import { from } from 'rxjs';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminsignupComponent } from './signup/adminsignup/adminsignup.component';
import { OperatorsignupComponent } from './signup/operatorsignup/operatorsignup.component';
import { SupervisorsignupComponent } from './signup/supervisorsignup/supervisorsignup.component';
import { ManagersignupComponent } from './signup/managersignup/managersignup.component';

// service
import {UserdetailsService} from '../services/userdetails.service';

@NgModule({
  declarations: [
    AdminComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    AddUserComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent,
    UsersListComponent,
    UsersignupComponent,
    AdminsignupComponent,
    OperatorsignupComponent,
    SupervisorsignupComponent,
    ManagersignupComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserdetailsService]

})
export class AdminModule { }
