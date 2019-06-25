import { Component, OnInit } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
