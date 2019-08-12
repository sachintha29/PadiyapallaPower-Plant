import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesupervisorComponent } from '../sitesupervisor/sitesupervisor.component';
import { RouterModule, Routes } from '@angular/router';
import { MainDataComponent } from './generate-data/main-data/main-data.component';
import { SiteoperatorComponent } from './siteoperator.component';
import { GeneratorAnnualyComponent } from './maintenence-data/generator/annualy/annualy.component';
import { GeneratorHalfyearComponent } from './maintenence-data/generator/halfyear/halfyear.component';
import { GeneratorQuaterlyComponent } from './maintenence-data/generator/quaterly/quaterly.component';
import { GeneratorWeeklyComponent } from './maintenence-data/generator/weekly/weekly.component';
import { GeneratorMonthlyComponent } from './maintenence-data/generator/monthly/monthly.component';
import { SigninComponent } from './signin/signin.component';
import { TurbineAnnualyComponent } from './maintenence-data/turbine/annualy/annualy.component';
import { TurbineHalfyearComponent } from './maintenence-data/turbine/halfyear/halfyear.component';
import { TurbineQuaterlyComponent } from './maintenence-data/turbine/quaterly/quaterly.component';
import { TurbineMonthlyComponent } from './maintenence-data/turbine/monthly/monthly.component';
import { TurbineWeeklyComponent } from './maintenence-data/turbine/weekly/weekly.component';
import { TurbineOthersComponent } from './maintenence-data/turbine/others/others.component';
import { UpdateComponent } from './spare-parts/update/update.component';

const routes: Routes = [
  {
  path: 'operator',
  component: SiteoperatorComponent,
  children: [
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      {path : 'signin', component: SigninComponent},
      { path: 'main', component: MainDataComponent},
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
export class SiteoperatorRoutingModule { }
