import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesupervisorComponent } from './sitesupervisor.component';

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
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    {
    path: 'supervisor',
    component: SitesupervisorComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path : 'signin', component: SigninComponent},
      { path: 'main', component: MainDataComponent},
      { path : 'machine-one', component: MachineOneComponent},
      { path : 'machine-two', component: MachineTwoComponent},
      {path: 'generator-anualy', component: GeneratorAnnualyComponent},
      {path: 'generator-halfyear', component: GeneratorHalfyearComponent},
      {path: 'generator-quaterly', component: GeneratorQuaterlyComponent},
      {path: 'generator-weekly', component: GeneratorWeeklyComponent},
      {path: 'generator-monthly', component: GeneratorMonthlyComponent},
      {path: 'turbine-anualy', component: TurbineAnnualyComponent},
      {path: 'turbine-halfyear', component: TurbineHalfyearComponent},
      {path: 'turbine-quaterly', component: TurbineQuaterlyComponent},
      {path: 'turbine-monthly', component: TurbineMonthlyComponent},
      {path: 'turbine-weekly', component: TurbineWeeklyComponent},
      {path: 'turbine-other', component: TurbineOthersComponent},
      {path: 'spartparts-update', component: UpdateComponent }
    ]
    }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitesupervisorRoutingModule { }
