import { Component, OnInit } from '@angular/core';
import {moveIn, fallIn, moveInLeft } from '../shared/router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@moveIn]': '' }
})
export class HomeComponent implements OnInit {

  state = '';
  constructor() { }

  ngOnInit() {
  }

}
