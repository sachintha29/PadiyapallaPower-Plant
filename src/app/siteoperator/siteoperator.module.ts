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
import { SigninComponent } from './signin/signin.component';
import { TurbineAnnualyComponent } from './maintenence-data/turbine/annualy/annualy.component';
import { TurbineHalfyearComponent } from './maintenence-data/turbine/halfyear/halfyear.component';
import { TurbineMonthlyComponent } from './maintenence-data/turbine/monthly/monthly.component';
import { TurbineQuaterlyComponent } from './maintenence-data/turbine/quaterly/quaterly.component';
import { TurbineWeeklyComponent } from './maintenence-data/turbine/weekly/weekly.component';
import { TurbineOthersComponent } from './maintenence-data/turbine/others/others.component';
import { UpdateComponent } from './spare-parts/update/update.component';
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
    GeneratorQuaterlyComponent,
    TurbineAnnualyComponent,
    TurbineHalfyearComponent,
    TurbineMonthlyComponent,
    TurbineQuaterlyComponent,
    TurbineWeeklyComponent,
    TurbineOthersComponent,
    UpdateComponent,
    SigninComponent
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
