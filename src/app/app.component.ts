import { Component } from '@angular/core';
import { moveIn, fallIn } from './shared/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@moveIn]': '' }
})
export class AppComponent {
  title = 'PadiyapallaPower-Plant';
  state = '';
}
