import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
    usersCollection: AngularFirestoreCollection<User>;


  constructor(public afs: AngularFirestore) {


  }

  getAdmins() {
    return this.afs.collection('/users/userdetails/admin').snapshotChanges();

  }
  getOperators() {
    return this.afs.collection('/users/userdetails/operator').snapshotChanges();

  }

  getSupervisors() {
    return this.afs.collection('/users/userdetails/supervisor').snapshotChanges();

  }
  getManagers() {
    return this.afs.collection('/users/userdetails/manager').snapshotChanges();

  }
}

