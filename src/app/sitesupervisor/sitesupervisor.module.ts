import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SitesupervisorRoutingModule } from './sitesupervisor-routing.module';
import { MaterialModule } from '../shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SitesupervisorComponent } from './sitesupervisor.component';

@NgModule({
  declarations: [NavtabsComponent, SidenavListComponent, HeaderComponent, SitesupervisorComponent],
  imports: [
    CommonModule,
    SitesupervisorRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SitesupervisorModule { }
