import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
    {
    path: 'admin',
    component: AdminComponent,
    children: [
        { path: '', redirectTo: 'user', pathMatch: 'full'},
        { path: 'userdetails', component: UsersListComponent},
        { path: 'user', component: UserComponent},
        {path: 'signup', component: SignupComponent}
    ]
    }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
