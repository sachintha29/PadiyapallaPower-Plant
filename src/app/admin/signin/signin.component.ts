import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService, FormControl]
})

export class SigninComponent implements OnInit {
  constructor(private authService: AuthService
    ) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,12}$';
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(this.pwdPattern),
  ]);

  matcher = new MyErrorStateMatcher();

  hide = true;


  ngOnInit() {
  }


}
