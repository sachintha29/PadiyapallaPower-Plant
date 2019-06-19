import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesupervisorComponent } from './sitesupervisor.component';

const routes: Routes = [
    {
    path: 'siteoperator',
    component: SitesupervisorComponent,
    children: [
        { path: '', redirectTo: '', pathMatch: 'full'},
    ]
    }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitesupervisorRoutingModule { }
