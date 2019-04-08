import { Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './card.html',
  styleUrls: ['./app.component.css'],
})

export class card implements OnInit {
  isLinear = false;
  name: FormGroup;
  dob: FormGroup;
  gender: FormGroup;
  snils: FormGroup;
  genders: Gender[] = [
    {value: 'gender-0', viewValue: 'Мужской'},
    {value: 'gender-1', viewValue: 'Женский'},
  ];

  today = new Date().toJSON().split('T')[0];

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.name = this._formBuilder.group({
      firstCtrl: ['', [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ]]
    });
    this.dob = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.gender = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.snils = this._formBuilder.group({
      fourthCtrl: ['', Validators.required,]
    });
  }

  addUser() {
  }

  // form1() {
  //   console.log(this.name.value);
  // }
  // form2() {
  //   console.log(this.dob.value);
  // }
  // form3() {
  //   console.log('здесь должен быть пол, но его пока нет' );
  // }
  // form4() {
  //   console.log(this.snils.value);
  // }
}
export interface Gender {
  value: string;
  viewValue: string;
}


