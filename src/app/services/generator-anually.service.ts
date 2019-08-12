import { Injectable } from '@angular/core';
import {GeneratorAnually} from '../models/generator-anually';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneratorAnuallyService {

  private dbPath = '/maintainances/generator/annualy';

   generatorRef: AngularFirestoreCollection<GeneratorAnually> = null;

  constructor(private db: AngularFirestore) {
    this. generatorRef = db.collection(this.dbPath);
  }

  createGeneratorYear(gData: GeneratorAnually): void {
    this. generatorRef.add({...gData});
  }

  updateGeneratorYear(key: string, value: any): Promise<void> {
    return this.generatorRef.doc(key).update(value);
  }
  deleteGeneratorYear(key: string): Promise<void> {
    return this.generatorRef.doc(key).delete();
  }

  getGeneratorYearList(): AngularFirestoreCollection<GeneratorAnually> {
    return this.generatorRef;
  }

  deleteAll() {
    this.generatorRef.get().subscribe(
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

