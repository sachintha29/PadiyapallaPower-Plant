import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { MaterialModule } from '../shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerComponent } from './manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [NavtabsComponent, SidenavListComponent, HeaderComponent, ManagerComponent, DashboardComponent, ChartComponent,
    SigninComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
