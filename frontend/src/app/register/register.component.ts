import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  @ViewChild('f') registerForm: NgForm;
  
      //  On submit click, reset field value
      onSubmit() {
          this.registerForm.reset();
      }
}
