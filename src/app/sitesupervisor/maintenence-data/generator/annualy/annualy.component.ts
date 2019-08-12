import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-annualy',
  templateUrl: './annualy.component.html',
  styleUrls: ['./annualy.component.css']
})
export class GeneratorAnnualyComponent implements OnInit {
  ControlUnitCaseCleaningFormControl = new FormControl('', [
    Validators.required,
  ]);
  InsulationResistanceVerificationFormControl = new FormControl('', [
    Validators.required,
  ]);
  CheckTightnessPowerCablesFormControl = new FormControl('', [
    Validators.required,
  ]);
  CheckingofExcisterAirGapFormControl =  new FormControl('', [
    Validators.required,
  ]);
  constructor() { }

  ngOnInit() {
  }

}
