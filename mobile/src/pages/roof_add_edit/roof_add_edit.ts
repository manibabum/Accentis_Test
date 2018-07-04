import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-roof_add_edit',
  templateUrl: 'roof_add_edit.html'
})
export class RoofAddEditPage {

  constructor(public navCtrl: NavController) {
    
  }

  save() {
    debugger;
    console.log("save button click");
  }

  cancel() {
    debugger;
    console.log("cancel button click");
  }

  handleLogin() {
    debugger;
    //
    console.log("login");
  }

}
