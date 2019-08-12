import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-halfyear',
  templateUrl: './halfyear.component.html',
  styleUrls: ['./halfyear.component.css']
})
export class GeneratorHalfyearComponent implements OnInit {
  CleaningoftheExciterFormControl = new FormControl('', [
    Validators.required,
  ]);
  ControlUnitCaseCleaningFormControl = new FormControl('', [
    Validators.required,
  ]);
  VisualInspectionofBrakeShoesFormControl = new FormControl('', [
    Validators.required,
  ]);
  InspectionandCheckingFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor() { }

  ngOnInit() {
  }

}
