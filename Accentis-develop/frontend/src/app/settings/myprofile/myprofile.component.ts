import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  regularForm: FormGroup;
  ChangeregularForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.regularForm = new FormGroup({
      'projectinput1': new FormControl(null, [Validators.required]),
      'projectinput2': new FormControl(null, [Validators.required]),
      'projectinput3': new FormControl(null, [Validators.required,Validators.email]),
      'projectinput4': new FormControl(null, [Validators.required]),
      'projectinput5': new FormControl(null, [Validators.required]),
      'projectinput6': new FormControl(null, [Validators.required]),
      'projectinput7': new FormControl(null, [Validators.required]),
      'projectinput8': new FormControl(null, [Validators.required]),
      'projectinput9': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });

    this.ChangeregularForm = new FormGroup({
      'CurrentPwd': new FormControl(null, [Validators.required]),
      'NewPwd': new FormControl(null, [Validators.required]),
      'ConfirmPwd': new FormControl(null, [Validators.required]),
    }, { updateOn: 'blur' });

  }
  onReactiveFormSubmit() {
    this.regularForm.reset();
  }

  ChangeonReactiveFormSubmit() {
    this.ChangeregularForm.reset();
  }
}
