import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesupervisorComponent } from '../sitesupervisor/sitesupervisor.component';
import { RouterModule, Routes } from '@angular/router';
import { MainDataComponent } from './generate-data/main-data/main-data.component';
import { SiteoperatorComponent } from './siteoperator.component';
import { MachineOneComponent } from './generate-data/machine-one/machine-one.component';
import { MachineTwoComponent } from './generate-data/machine-two/machine-two.component';
import { GeneratorAnnualyComponent } from './maintenence-data/generator/annualy/annualy.component';
import { GeneratorHalfyearComponent } from './maintenence-data/generator/halfyear/halfyear.component';
import { GeneratorQuaterlyComponent } from './maintenence-data/generator/quaterly/quaterly.component';
import { GeneratorWeeklyComponent } from './maintenence-data/generator/weekly/weekly.component';
import { GeneratorMonthlyComponent } from './maintenence-data/generator/monthly/monthly.component';

const routes: Routes = [
  {
  path: 'operator',
  component: SiteoperatorComponent,
  children: [
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      { path: 'main', component: MainDataComponent},
      { path : 'machine-one', component: MachineOneComponent},
      { path : 'machine-two', component: MachineTwoComponent},
      {path: 'generator-anualy', component: GeneratorAnnualyComponent},
      {path: 'generator-halfyear', component: GeneratorHalfyearComponent},
      {path: 'generator-quaterly', component: GeneratorQuaterlyComponent},
      {path: 'generator-weekly', component: GeneratorWeeklyComponent},
      {path: 'generator-monthly', component: GeneratorMonthlyComponent},

  ]
  }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SiteoperatorRoutingModule { }
