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
import { SigninComponent } from './signin/signin.component';
import { MainDataComponent } from './generate-data/main-data/main-data.component';
import { MachineOneComponent } from './generate-data/machine-one/machine-one.component';
import { MachineTwoComponent } from './generate-data/machine-two/machine-two.component';
import { GeneratorAnnualyComponent } from './maintenence-data/generator/annualy/annualy.component';
import { GeneratorHalfyearComponent } from './maintenence-data/generator/halfyear/halfyear.component';
import { GeneratorQuaterlyComponent } from './maintenence-data/generator/quaterly/quaterly.component';
import { GeneratorWeeklyComponent } from './maintenence-data/generator/weekly/weekly.component';
import { TurbineAnnualyComponent } from './maintenence-data/turbine/annualy/annualy.component';
import { GeneratorMonthlyComponent } from './maintenence-data/generator/monthly/monthly.component';
import { TurbineHalfyearComponent } from './maintenence-data/turbine/halfyear/halfyear.component';
import { TurbineMonthlyComponent } from './maintenence-data/turbine/monthly/monthly.component';
import { TurbineQuaterlyComponent } from './maintenence-data/turbine/quaterly/quaterly.component';
import { TurbineWeeklyComponent } from './maintenence-data/turbine/weekly/weekly.component';
import { TurbineOthersComponent } from './maintenence-data/turbine/others/others.component';
import { UpdateComponent } from './spare-parts/update/update.component';

@NgModule({
  declarations: [NavtabsComponent,
     SidenavListComponent,
     HeaderComponent,
     SitesupervisorComponent,
     SigninComponent,
     MainDataComponent,
     MachineOneComponent,
     MachineTwoComponent,
     GeneratorAnnualyComponent,
     GeneratorHalfyearComponent,
     GeneratorQuaterlyComponent,
     GeneratorWeeklyComponent,
     GeneratorMonthlyComponent,
     TurbineAnnualyComponent,
     TurbineHalfyearComponent,
     TurbineMonthlyComponent,
     TurbineQuaterlyComponent,
     TurbineWeeklyComponent,
     TurbineOthersComponent,
     UpdateComponent
    ],
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
