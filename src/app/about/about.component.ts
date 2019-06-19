import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@moveIn]': '' }
})
export class AboutComponent implements OnInit {
  state = '';
  constructor() { }

  ngOnInit() {
  }

}
