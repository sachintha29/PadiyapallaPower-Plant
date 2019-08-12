import { Component, OnInit, ComponentRef } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { PowerGenerationService } from 'src/app/services/power-generation.service';
import { Generation} from '../../../models/powergen';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService} from 'ngx-toastr';
import { AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.css'],
})
export class MainDataComponent implements OnInit {
  mydate = new Date();
  date =  Date;
  gendata: Generation;
  powergendata = {
    date: Date,
    cebmeter: '',
    machineone: '',
    machinetwo: '',
    machine1: {
      load: '',
      daillymaxload: '',
      outages: '',
      grid: '',
      generation: '',
      powermachine: '',
      generatorwindings: '',
      debearingtemp: '',
      ndebearingtemp: '',
      transfomeroiltemp: '',
      lubricantoiltemp: '',
    },
    machine2: {
      load: '',
      daillymaxload: '',
      outages: '',
      grid: '',
      generation: '',
      powermachine: '',
      generatorwindings: '',
      debearingtemp: '',
      ndebearingtemp: '',
      transfomeroiltemp: '',
      lubricantoiltemp: '',
    },
  };





  formdata: Generation;
  submitted = false;

  constructor(private service: PowerGenerationService, public db: AngularFirestore, private toastr: ToastrService) {
   }
  ngOnInit() {
    this.resetForm();
  }

  newPowerGeneration(): void {
    this.submitted = false;

  }

 onSubmit(form) {
    this.service.addpower(this.powergendata);
    this.resetForm(form);
    this.toastr.success('Submitted Successfully', 'Generation Data');

 }

 resetForm(form?: NgForm) {
  if ( form != null) {
    form.resetForm();
 }
  this.powergendata = {
      date: Date,
      cebmeter: '',
      machineone: '',
      machinetwo: '',
      machine1: {
        load: '',
        daillymaxload: '',
        outages: '',
        grid: '',
        generation: '',
        powermachine: '',
        generatorwindings: '',
        debearingtemp: '',
        ndebearingtemp: '',
        transfomeroiltemp: '',
        lubricantoiltemp: '',
      },
      machine2: {
        load: '',
        daillymaxload: '',
        outages: '',
        grid: '',
        generation: '',
        powermachine: '',
        generatorwindings: '',
        debearingtemp: '',
        ndebearingtemp: '',
        transfomeroiltemp: '',
        lubricantoiltemp: '',
      },
  };
 }



}


