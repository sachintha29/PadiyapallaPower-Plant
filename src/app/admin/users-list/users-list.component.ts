import { Component, OnInit } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';

import {Observable} from 'rxjs';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import {User} from '../../models/user';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  adminlist: User[];
  operatorlist: User[];
  supervisorlist: User[];
  managerlist: User[];

  constructor(private service: UserdetailsService) { }
  ngOnInit() {
    this.service.getAdmins().subscribe(actionArray => {
      this.adminlist = actionArray.map(item => {
        return {
          uid: item.payload.doc.id,
          ...item.payload.doc.data()
        } as User ;
      });
    });
    this.service.getOperators().subscribe(actionArray => {
      this.operatorlist = actionArray.map(item => {
        return {
          uid: item.payload.doc.id,
          ...item.payload.doc.data()
        } as User ;
      });
    });
    this.service.getSupervisors().subscribe(actionArray => {
      this.supervisorlist = actionArray.map(item => {
        return {
          uid: item.payload.doc.id,
          ...item.payload.doc.data()
        } as User ;
      });
    });
    this.service.getManagers().subscribe(actionArray => {
      this.managerlist = actionArray.map(item => {
        return {
          uid: item.payload.doc.id,
          ...item.payload.doc.data()
        } as User ;
      });
    });
  }

}
