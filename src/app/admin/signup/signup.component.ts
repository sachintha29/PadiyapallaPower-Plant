import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';
import {User} from '../../models/user';
import { Observable } from 'rxjs/Observable';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  detailForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService
    ) { }
  roles = [{id: 1, value: 'Admin'}, {id: 2, value: 'SiteOperator'}, {id: 3, value: 'SiteSupervisor'}, {id: 4, value: 'Manager'} ];
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
     this.detailForm = this.fb.group({
      displayName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [ Validators.required, Validators.maxLength(10)]],
      role: ['0'],

    });

  }

  get displayName() { return this.detailForm.get('displayName'); }
  get address() { return this.detailForm.get('address'); }
  get phone() { return this.detailForm.get('role'); }
  get role() { return this.detailForm.get('role'); }

  updateUserData(user) {
    return this.authService.updateUser(user, { displayName:  this.displayName.value, address: this.address.value,
      phone: this.phone.value , role: this.role.value });
  }

}
