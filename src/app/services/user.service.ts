import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase , AngularFireList} from '@angular/fire/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebase: AngularFireDatabase) { }
  userList: AngularFireList<any>;
  userrole: AngularFireList<any>;
  userorderbytype: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required ),
    email: new FormControl('', Validators.email),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    role: new FormControl(0),


  });

  intializeFromGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      email: '',
      address: '',
      phone: '',
      role: 0,
    });
  }
  getsUserrole() {

  }
  getUsers() {
    this.userList = this.firebase.list('Users');
    return this.userList.snapshotChanges();

  }

  getrole() {
    this.userList = this.firebase.list('users');
    return this.userrole.snapshotChanges();
  }

  insertUser(user) {
    this.userList.push({
      name: user.name,
      address: user.address,
      email: user.email,
      phone: user.phone,
      role: user.role
    });
  }

  updateUser(user) {
    this.userList.update(user.$key ,
    {
      name: user.name,
      address: user.address,
      email: user.email,
      phone: user.phone,
      role: user.role
    });
  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }

  populateForm(user) {
    this.form.setValue(_.omit(user));

  }
}
