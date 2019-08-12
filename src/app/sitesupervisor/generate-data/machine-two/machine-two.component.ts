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
  selector: 'app-machine-two',
  templateUrl: './machine-two.component.html',
  styleUrls: ['./machine-two.component.css']
})
export class MachineTwoComponent implements OnInit {
  CEBmeterFormControl = new FormControl('', [
    Validators.required,

  ]);
  constructor() { }

  ngOnInit() {
  }

}
