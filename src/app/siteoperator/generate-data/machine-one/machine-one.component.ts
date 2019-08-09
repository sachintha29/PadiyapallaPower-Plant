import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-machine-one',
  templateUrl: './machine-one.component.html',
  styleUrls: ['./machine-one.component.css']
})
export class MachineOneComponent implements OnInit {
  CEBmeterFormControl = new FormControl('', [
    Validators.required,

  ]);
  DailyMaxLoadAssumedFormControl = new FormControl('', [
    Validators.required,

  ]);
  OutagesFormControl = new FormControl('', [
    Validators.required,

  ]);
  GridFormControl =  new FormControl('', [
    Validators.required,

  ]);
  GenerationFormControl = new FormControl('', [
    Validators.required,

  ]);
  PowerMachineFormControl =  new FormControl('', [
    Validators.required,

  ]);
  GeneratorWindingsFormControl = new FormControl('', [
    Validators.required,
  ]);
  DEBearingTempFormControl = new FormControl('', [
    Validators.required,
  ]);
  NDEBearingTempFormControl = new FormControl('', [
    Validators.required,
  ]);
  TransformerOilTempFormControl = new FormControl('', [
    Validators.required,
  ]);
  LubricantOilTempFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor() { }

  ngOnInit() {
  }

}
