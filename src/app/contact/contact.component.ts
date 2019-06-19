import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@moveIn]': '' }
})
export class ContactComponent implements OnInit {
  state = '';
  constructor() { }

  ngOnInit() {
  }

}
