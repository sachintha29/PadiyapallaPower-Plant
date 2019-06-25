import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SiteoperatorRoutingModule } from './siteoperator-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainDataComponent } from './generate-data/main-data/main-data.component';
import { MachineOneComponent } from './generate-data/machine-one/machine-one.component';
import { MachineTwoComponent } from './generate-data/machine-two/machine-two.component';
import { SiteoperatorComponent } from './siteoperator.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';


import { GeneratorAnnualyComponent } from './maintenence-data/generator/annualy/annualy.component';
import { GeneratorHalfyearComponent } from './maintenence-data/generator/halfyear/halfyear.component';
import { GeneratorQuaterlyComponent } from './maintenence-data/generator/quaterly/quaterly.component';
import { GeneratorWeeklyComponent } from './maintenence-data/generator/weekly/weekly.component';
import { GeneratorMonthlyComponent } from './maintenence-data/generator/monthly/monthly.component';
@NgModule({
  declarations: [
    SiteoperatorComponent,
    MainDataComponent ,
    MachineOneComponent,
    MachineTwoComponent,
    NavtabsComponent,
    SidenavListComponent,
    HeaderComponent,
    GeneratorAnnualyComponent,
    GeneratorHalfyearComponent,
    GeneratorMonthlyComponent,
    GeneratorWeeklyComponent,
    GeneratorQuaterlyComponent
  ],
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
