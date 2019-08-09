import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';
import {User} from '../../../models/user';
import { Observable } from 'rxjs/Observable';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-supervisorsignup',
  templateUrl: './supervisorsignup.component.html',
  styleUrls: ['./supervisorsignup.component.css']
})
export class SupervisorsignupComponent implements OnInit {

  constructor(  public authService: AuthService) { }
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
  confirmpasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(this.pwdPattern),
  ]);




  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

}
