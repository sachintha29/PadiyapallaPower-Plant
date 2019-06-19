import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  toggleField: string;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:quotemark
    this.toggleField = "searchMode";
  }

  toggle(filter?) {
    // tslint:disable-next-line:quotemark
    if (!filter) { filter = "searchMode"; } else {filter = filter; }
    this.toggleField = filter;
  }

}
