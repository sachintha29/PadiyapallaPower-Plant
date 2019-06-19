import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteoperatorComponent } from './siteoperator.component';

const routes: Routes = [
    {
    path: 'siteoperator',
    component: SiteoperatorComponent,
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
export class SiteoperatorRoutingModule { }
