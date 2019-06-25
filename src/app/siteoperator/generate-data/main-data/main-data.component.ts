import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.css']
})
export class MainDataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toMachineOne() {
      this.router.navigate(['/operator/machine-one']);
  }

}
