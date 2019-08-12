import { Component, Input, forwardRef, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {FormsModule, Validators, NgForm} from '@angular/forms';
import {MatIcon} from '@angular/material';
import {GeneratorAnuallyService} from '../../../../services/generator-anually.service';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { ToastrService} from 'ngx-toastr';
import {MatDatepicker} from '@angular/material/datepicker';

import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, } from '@angular/material';
import {GeneratorAnually} from '../../../../models/generator-anually';


@Component({
  selector: 'app-annualy',
  templateUrl: './annualy.component.html',
  styleUrls: ['./annualy.component.css'],

})
export class GeneratorAnnualyComponent implements OnInit  {
   gData: GeneratorAnually = new GeneratorAnually();
   submitted = false;
   date = new Date();
   chosenYearDate: Date;



  constructor(public service: GeneratorAnuallyService, private toastr: ToastrService) {}

  newData(): void {
    this.submitted = false;
    this.gData = new  GeneratorAnually();
  }

  save() {
    this.service.createGeneratorYear(this.gData);
    this.gData = new GeneratorAnually();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    this.toastr.success('Submitted Succesfully', 'Maintainence Generator Anually Data');

  }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.gData = {
      key: null,
      year: '',
      machine1ControlUnitCaseCleaning: '',
      machine1InsulationResistanceVerifi: '',
      machine1CheckTightnessofallPower: '',
      machine1CheckingofExcisterAirGap: '',
      machine2ControlUnitCaseCleaning: '',
      machine2InsulationResistanceVerifi: '',
      machine2CheckTightnessofallPower: '',
      machine2CheckingofExcisterAirGap: '',
    };

  }

}


