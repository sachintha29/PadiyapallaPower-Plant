import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Output() closeSideNavigation = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



}
