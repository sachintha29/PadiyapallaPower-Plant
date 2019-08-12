import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Generation } from '../models/powergen.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PowerGenerationService {
  formData: Observable<Generation> ;


  private dbPath = '/powergeneration';
  powergenrationRef: AngularFirestoreCollection<Generation> = null;

  constructor(private db: AngularFirestore) {
    this.powergenrationRef = db.collection(this.dbPath);
  }

  addpower(powerdata) {
  this.db.collection('powergeneration').add(powerdata).then(() => {
    console.log('Done');
  });
  }
  createPowerGenataration(key: string , power: Generation ): void {
    this.powergenrationRef.doc(key).set(power);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.powergenrationRef.doc(key).update(value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.powergenrationRef.doc(key).delete();
  }

  getCustomersList(): AngularFirestoreCollection<Generation> {
    return this.powergenrationRef;
  }

  deleteAll() {
    this.powergenrationRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}



