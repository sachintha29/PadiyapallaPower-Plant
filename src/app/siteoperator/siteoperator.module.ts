import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SiteoperatorRoutingModule } from './siteoperator-routing.module';
import { MaterialModule } from '../shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteoperatorComponent } from './siteoperator.component';

@NgModule({
  declarations: [NavtabsComponent, SidenavListComponent, HeaderComponent, SiteoperatorComponent],
  imports: [
    CommonModule,
    SiteoperatorRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SiteoperatorModule { }
