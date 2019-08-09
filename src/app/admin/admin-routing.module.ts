import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SigninComponent } from './signin/signin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminsignupComponent } from './signup/adminsignup/adminsignup.component';
import { OperatorsignupComponent } from './signup/operatorsignup/operatorsignup.component';
import { SupervisorsignupComponent } from './signup/supervisorsignup/supervisorsignup.component';
import { ManagersignupComponent } from './signup/managersignup/managersignup.component';

const routes: Routes = [
    {
    path: 'admin',
    component: AdminComponent,
    children: [
        { path: '', redirectTo: 'user', pathMatch: 'full'},
        { path: 'users-list', component: UsersListComponent},
        { path: 'user', component: UserComponent},
        { path: 'signin', component: SigninComponent},
        { path: 'adminsignup', component: AdminsignupComponent},
        { path: 'supervisorsignup', component: SupervisorsignupComponent},
        { path: 'operatorsignup', component: OperatorsignupComponent},
        { path: 'managersignup', component: ManagersignupComponent},
        { path: 'selectusers', component: UsersignupComponent}
    ]
    }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
